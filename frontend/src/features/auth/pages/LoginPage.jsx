import LoginForm from "../components/LoginForm";
import { loginUser } from "../api/authApi";


const LoginPage = () => {

  const handleSubmit = async (data) => {
  try {
    const user = await loginUser(data);

    // store user (simple session)
    localStorage.setItem("user", JSON.stringify(user));

    alert(`Welcome ${user.name}`);

  } catch (error) {
    throw error; // 🔥 important (so form can catch)
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
