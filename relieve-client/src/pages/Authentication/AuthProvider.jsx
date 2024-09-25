import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, userName, contactNumber) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, {
        displayName: userName,
        phoneNumber: contactNumber,
      });
      return result;
    } finally {
      setLoading(false);
    }
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/users?email=${currentUser.email}`
          );
          if (response.data.length > 0) {
            const dbUser = response.data[0];
            const mergedUser = {
              ...currentUser,
              userName: dbUser.userName || currentUser.displayName,
              contactNumber: dbUser.contactNumber || currentUser.phoneNumber,
              dateOfBirth: dbUser.dateOfBirth,
              location: dbUser.location,
              profession: dbUser.profession,
              userImage: dbUser.userImage,
              communityIds: dbUser.communityIds,
              eventIds: dbUser.eventIds,
              incidentIds: dbUser.incidentIds,
              userId: dbUser.userId,
            };
            setUser(mergedUser);
          } else {
            setUser(currentUser);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(currentUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const updateUserData = async (updatedData) => {
    if (user && user.email) {
      try {
        await axios.put(
          `http://localhost:8080/api/users/${user.email}`,
          updatedData
        );
        setUser((prevUser) => ({ ...prevUser, ...updatedData }));
      } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
      }
    }
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
