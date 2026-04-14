import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { registerUser } from '../api/authApi'
import { useNavigate } from 'react-router-dom'
import useTitle from '@/hooks/useTitle'

const RegisterPage = () => {

  useTitle("Register")

  const navigate = useNavigate()

const handleRegisterUser = async (data) => {
  // check duplicate
  const res = await fetch(
    `http://localhost:3000/users?email=${data.email}`
  );
  const existingUsers = await res.json();

  if (existingUsers.length > 0) {
    throw new Error("Email already exists"); // 🔥 IMPORTANT
  }

  const user = await registerUser(data);
  localStorage.setItem("user", JSON.stringify(user));
  navigate("/")
  return user;
};

  return (
      <div className="bg-indigo-200 min-h-screen flex justify-center items-center">
        <div className="w-lg mx-auto bg-gray-100 space-y-3 p-8 rounded-lg shadow-xl">
          <h1 className='text-center text-2xl py-2'>Register</h1>
          <RegisterForm onSubmit={handleRegisterUser} />
        </div>
      </div>
  )
}

export default RegisterPage