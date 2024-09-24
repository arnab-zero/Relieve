import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="hero flex justify-center min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex gap-12 flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-r-lg">
          <div className="bg-[#336699] px-20 pt-[12%] rounded-l-lg">
            <h1 className="font-manrope text-5xl text-center pb-8 font-semibold text-white">
              Relieve
            </h1>
            <div>
              <img src="/logo.svg" alt="" width={"180"} />
            </div>
          </div>
          <form onSubmit={handleLogin} className="pr-20 pl-10 py-20">
            <h1 className="text-3xl font-bold text-center pb-5">Sign In</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Email</span> */}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                {/* <span className="label-text">Password</span> */}
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#336699] hover:bg-[#86bbd8] text-white">
                Sign In
              </button>
            </div>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-gray-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
