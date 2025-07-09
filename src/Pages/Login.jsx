import React, { use, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
// import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  //  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  // const [forgetPasswordSuccess, setForgetPasswordSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  // console.log(location);
  const { signIn, googleSignIn, updateUser, setUser } = use(AuthContext);
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        fetch(`http://localhost:3000/gardeners?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.exists) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please sign up with Google first.",
              });
            } else {
              //  login successful
              Swal.fire({
                icon: "success",
                title: "Successfully logged in!",
                showConfirmButton: false,
                timer: 1500,
              });

              // set user in AuthContext
              setUser(user);
              navigate(location.state?.from || "/");
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.code,
        });
      });
  };

  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const singInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // update last sign in to the database
        fetch("http://localhost:3000/gardeners", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(singInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        // console.log(user);

        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorMessage);
        // setError(errorCode);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorCode}`,
          //   footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
    // console.log(email, password);
  };

  return (
    <div className="flex  justify-center items-center min-h-screen font-lora">
      <div className="card bg-accent w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-green-600  text-center font-merriWeather">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label text-shadow-gray-700">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label text-shadow-gray-800">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="btn bg-primary text-white font-merriWeather mt-4"
            >
              Login
            </button>
            <p className="font-semibold  text-center pt-5">
              Don't have an account?{" "}
              <Link
                className="text-green-600"
                to="/auth/register"
                state={{ from: location.state?.from || "/" }}
              >
                Register
              </Link>{" "}
            </p>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black font-merriWeather border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
