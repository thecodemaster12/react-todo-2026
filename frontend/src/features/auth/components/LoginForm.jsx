import React, { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      await onSubmit(form);
      setForm({
        email: "",
        password: "",
      });
    } catch (error) {
      setErrors({
        general: error.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          className="border p-2 w-full"
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <input
          className="border p-2 w-full"
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
        {errors.general && (
          <p className="text-red-500 text-sm">{errors.general}</p>
        )}
      </div>

      <div className="text-center">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </div>

      <div className="text-center">
        <a className="text-blue-500 italic" href="/register">
          Register ?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
