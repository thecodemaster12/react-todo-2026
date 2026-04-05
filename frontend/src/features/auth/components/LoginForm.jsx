import React from "react";

const LoginForm = () => {
  return (
    <form className="space-y-4">
      {/* Email */}
      <div>
        <input
          className="border p-2 w-full"
          type="email"
          name="email"
          // value={form.email}
          placeholder="Email"
          // onChange={handleChange}
        />
        {/* {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )} */}
      </div>

      {/* Password */}
      <div>
        <input
          className="border p-2 w-full"
          type="password"
          name="password"
          // value={form.password}
          placeholder="Password"
          // onChange={handleChange}
        />
        {/* {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )} */}
      </div>

      <div className="text-center">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </div>

      <div className="text-center">
        <a className="text-blue-500 italic" href="#">Register ?</a>
      </div>
    </form>
  );
};

export default LoginForm;
