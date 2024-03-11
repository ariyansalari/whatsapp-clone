import { AuthInput } from "components";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useLoginForm } from "./hooks";
export const LoginForm = () => {
  const { status, error } = useSelector((state) => state.user);
  const {register,dispatch,errors,handleSubmit,loginData,navigate,watch}=useLoginForm()
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
    <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl ">
      <div className="text-center dark:text-dark_text_1">
        <h2 className="text-3xl mt-6 font-bold ">Welecome back</h2>
        <p className="mt-2 text-sm">Sign in</p>
      </div>
      <form className="mt-6 space-y-6" onSubmit={handleSubmit(loginData)}>
     
        <AuthInput
          name={"email"}
          error={errors?.email?.message}
          register={register}
          placeholder={"Email address:"}
          type={"text"}
        />
          <AuthInput
          name={"password"}
          error={errors?.password?.message}
          register={register}
          placeholder={"password"}
          type={"text"}
        />
      
        {error ? (
          <div>
            <p className="text-red-400">{error}</p>
          </div>
        ) : null}
        <button
          className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
          type="submit"
        >
          {status === "loading" ? (
            <PulseLoader color="#fff" size={16} />
          ) : (
            "Sign in"
          )}
        </button>
        <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
          <span>you do not have an account ?</span>
          <Link
            className="  hover:underline cursor-pointer transition ease-in duration-300"
            to={"/register"}
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  </div>
  );
};
