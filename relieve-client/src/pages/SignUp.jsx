import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-[#9EBED1]">
        <form className="card-body">
          <h1 className="text-3xl">
            Welcome to <span className="font-semibold">Relieve</span>
          </h1>
          <h3 className="text-slate-500">Please sign in to your account to contribute.</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="text-[#2bb9e8] label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-[#eaba93] hover:bg-[#d8843f] border-none text-white text-base font-semibold">
              Register
            </button>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary bg-gray-300 hover:bg-[#d8843f] border-none">
              <FcGoogle className="text-xl" />
              <span className="text-black font-bold">Sign In With Google</span>
            </button>
          </div>

          <div className="text-center mt-5">
            Already have an account?{" "}
            <span className="underline text-[#0D7EBF] font-bold text-lg">
              <Link to="/sign-in">Login</Link>
            </span>
          </div>
        </form>
      </div>

      <div className="right-side">
        {/* Placeholder for an image */}
        <div className="image-placeholder"></div>
      </div>
    </div>
  );
};

export default LoginPage;
