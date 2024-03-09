import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./registerSchema";
import { useDispatch } from "react-redux";
import { registerUser } from "system";
import { useNavigate } from "react-router-dom";
export const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onSubmit",
  });
  const registerData = async(data) => {
    const res=await dispatch(registerUser({ ...data, picture: "" }));
    if (res.payload.user) navigate("/");
  };
  return {
    register,
    handleSubmit,
    registerData,
    watch,
    errors,
  };
};
