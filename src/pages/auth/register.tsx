import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <button>Register</button>
      <p>Sudah punya akun? <Link href={"/auth/login"}>Login Disini</Link></p>
    </div>
  );
};

export default RegisterPage;
