import LoginForm from "../components/LoginForm";


const LoginPage = () => {
  return (
    <div className="bg-indigo-200 min-h-screen flex justify-center items-center">
      <div className="w-lg mx-auto bg-gray-100 space-y-3 p-8 rounded-lg shadow-xl">
        <h1 className="text-center text-2xl py-2">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
