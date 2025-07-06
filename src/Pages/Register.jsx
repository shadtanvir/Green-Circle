import React, { use, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const handleGoogleRegister = () => {
    googleSignIn()
      .then((result) => {
        const userProfile = {
          email: result.user.email,
          name: result.user.displayName,
          photoURL: result.user.photoURL,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // save profile info in the db
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        navigate(location.state?.from || "/");
        const user = result.user;
        updateUser({
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        })
          .then(() => {
            // setUser(user);
            setUser({
              ...user,
              displayName: result.user.displayName,
              photoURL: result.user.photoURL,
            });
          })
          .catch((error) => {
            // An error occurred
            setUser(user);
          });
        // console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorCode}`,
          //   footer: '<a href="#">Why do I have this issue?</a>',
        });
        // console.log(error);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    // password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (regex.test(password) === false) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The password should be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character.",
      });
      //   setPasswordError(
      //     "The password should be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character."
      //   );

      return;
    }
    // console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // save profile info in the db
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        navigate(location.state?.from || "/");
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            // setUser(user);
            setUser({ ...user, displayName: name, photoURL: photoUrl });
          })
          .catch((error) => {
            // An error occurred
            setUser(user);
          });
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // setError(errorCode);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorCode}`,
          //   footer: '<a href="#">Why do I have this issue?</a>',
        });
        // alert(errorMessage);
        // ..
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen font-lora">
      <div className="card bg-green-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold font-merriWeather text-2xl text-green-800 text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photoUrl"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="btn bg-green-800 text-white font-merriWeather mt-4"
            >
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already have an account?{" "}
              <Link className="text-green-900" to="/auth/login">
                Login
              </Link>{" "}
            </p>
            {/* Google */}
            <button
              onClick={handleGoogleRegister}
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
              Register with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
