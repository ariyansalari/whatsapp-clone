import { RegisterFrom } from "./partials";

export const RegisterScreen = () => {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      <div className="flex w-[1660px] mx-auto h-full ">
        <RegisterFrom/>
      </div>
    </div>
  );
};
