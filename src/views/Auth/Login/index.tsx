import Link from "next/link";
import { useRouter } from "next/router";

const LoginView = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    push("/product");
  };

  return (
    <div className="flex flex-col gap-y-2 justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button className="border border-black rounded p-2 px-5 hover:bg-black hover:text-white" type="button" onClick={handlerLogin}>Login</button>
      <p className="font-semibold">
        Belum punya akun? <Link className="hover:underline hover:text-gray-500" href={"/auth/register"}>Daftar Disini</Link>
      </p>
    </div>
  );
};

export default LoginView;
