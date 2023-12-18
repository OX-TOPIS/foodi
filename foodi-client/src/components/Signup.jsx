import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Modal from "./Modal";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
      <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-32">
        <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
        
        <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to="/">✕</Link>

            <h3 className="text-lg font-bold">Create A Account</h3>
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
            <input className="btn bg-green text-white" type="submit" value="Signup"/>
          </div>
          <p className="text-center">Have an account? <button onClick={() => document.getElementById("my_modal_3").showModal()}  className="underline text-red ml-1">Login</button> </p>
        </form>
        <Modal/>
    </div>
  )
}

export default Signup
