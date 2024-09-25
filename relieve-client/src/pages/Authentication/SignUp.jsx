import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const contactNumber = form.contactNumber.value;

    try {
        const result = await createUser(email, password, name, contactNumber);
        const user = result.user;
        
        const userData = {
            userName: name,
            contactNumber: contactNumber,
            email: email,
            dateOfBirth: "2010-01-01",
            location: "Dhaka, Bangladesh",
            profession: "",
            userImage: "",
            communityIds: [],
            eventIds: [],
            incidentIds: []
        };

        const response = await axios.post('http://localhost:8080/api/users', userData);
        
        if (response.status === 201) {
            navigate('/');
        } else {
            setError('Failed to create user profile');
        }
    } catch (error) {
        setError(error.message);
    }
}

  return (
    <div className="hero flex justify-center min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex gap-12 flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-r-lg">
          <div className="bg-[#336699] px-24 pt-[15%] rounded-l-lg">
            <h1 className="font-manrope text-5xl text-center pb-8 font-semibold text-white">
              Relieve
            </h1>
            <div>
              <img src="/logo.svg" alt="" width={"180"} />
            </div>
          </div>
          <form className="pr-20 pl-10 py-14" onSubmit={handleSignUp}>
            <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}{" "}
            <div className="form-control">
              {" "}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered mb-2"
                required
              />{" "}
            </div>{" "}
            <div className="form-control">
              {" "}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered mb-2"
                required
              />{" "}
            </div>{" "}
            <div className="form-control">
              {" "}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered mb-2"
                required
              />{" "}
            </div>{" "}
            <div className="form-control">
              {" "}
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                className="input input-bordered"
                required
              />{" "}
            </div>{" "}
            <div className="form-control mt-6">
              <button className="btn bg-[#336699] text-white hover:bg-[#86bbd8]">
                Sign Up
              </button>{" "}
            </div>{" "}
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-gray-400 hover:underline">
                Sign In
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
