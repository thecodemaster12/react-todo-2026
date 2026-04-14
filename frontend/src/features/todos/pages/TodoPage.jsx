import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '@/utils/auth'
import { getUser } from '@/utils/auth'

const TodoPage = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()

    navigate("/login")
  }

const user = getUser();

  return (
    <>
      <div>TodoPage {user?.name} </div>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">
          Logout
        </button>
    </>
  )
}

export default TodoPage