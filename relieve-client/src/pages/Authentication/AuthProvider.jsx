import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile 
} from "firebase/auth";
import app from "./firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    // Create a new user with Firebase Authentication and update profile
    const createUser = async (email, password, userName, contactNumber) => {
        setLoading(true);
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
    };

    // Sign in with Firebase Authentication
    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result;
        } finally {
            setLoading(false);
        }
    };

    // Log out the current user and reset state
    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            setUser(null); // Immediately reset user state to null
        } finally {
            setLoading(false);
        }
    };

    // Fetch user data from your backend
    const fetchUserData = async (email) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/users?email=${email}`);
            if (response.data.length > 0) {
                return response.data[0];
            }
            return null;
        } catch (error) {
            console.error("Error fetching user data:", error);
            return null;
        }
    };

    // Handle Firebase Authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    const dbUser = await fetchUserData(currentUser.email);
                    if (dbUser) {
                        // Merge Firebase and backend user data
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
                        setUser(currentUser); // Fallback to Firebase user if no backend data
                    }
                } catch (error) {
                    console.error("Error merging user data:", error);
                    setUser(currentUser); // Fallback to Firebase user if there's an error
                }
            } else {
                setUser(null); // Reset user if not authenticated
            }
            setLoading(false); // Ensure loading state is updated
        });

        return () => unsubscribe();
    }, []);

    // Update user data in the backend
    const updateUserData = async (updatedData) => {
        if (user && user.email) {
            try {
                await axios.put(`http://localhost:8080/api/users/${user.email}`, updatedData);
                setUser(prevUser => ({ ...prevUser, ...updatedData }));
            } catch (error) {
                console.error('Error updating user data:', error);
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
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
