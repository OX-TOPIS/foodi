import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


    // const {signUpWithGmail} = useContext(AuthContext)

      const onSubmit = (data) => console.log(data)
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        htmlFor="my_modal_3"
        onClick={() => document.getElementById("my_modal_3").close()}
        >✕</button>
            <h3 className="text-lg font-bold">Login!!</h3>
            {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* error */}
          {/* login btn */}
          <div className="form-control mt-6">
            <input className="btn bg-green text-white" type="submit" value="Login"/>
          </div>
          <p className="text-center">Do not have an account? <Link to="/signup" className="underline text-red ml-1">Sign up</Link> </p>
        </form>
        </div>



       


    </dialog>
  );
};

export default Modal;
