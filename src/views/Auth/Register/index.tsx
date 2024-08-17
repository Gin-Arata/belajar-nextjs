import Link from "next/link";

const RegisterView = () => {
  return (
    <div className="flex flex-col gap-y-2 h-screen justify-center items-center">
      <h1 className="text-3xl font-semibold">Register Page</h1>
      <button className="border border-black hover:bg-black p-2 px-5 rounded hover:text-white" type="button">Register</button>
      <p className="font-semibold">
        Sudah punya akun? <Link className="hover:underline hover:text-gray-500" href={"/auth/login"}>Login Disini</Link>
      </p>
    </div>
  );
};

export default RegisterView;
