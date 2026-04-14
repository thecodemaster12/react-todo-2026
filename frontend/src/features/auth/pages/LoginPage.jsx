import LoginForm from "../components/LoginForm";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import useTitle from "@/hooks/useTitle";


const LoginPage = () => {

  useTitle("Login")

  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    try {
      const user = await loginUser(data);

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/"); // 🔥 redirect to dashboard
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="bg-indigo-200 min-h-screen flex justify-center items-center">
      <div className="w-lg mx-auto bg-gray-100 space-y-3 p-8 rounded-lg shadow-xl">
        <h1 className="text-center text-2xl py-2">Login</h1>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginPage;
