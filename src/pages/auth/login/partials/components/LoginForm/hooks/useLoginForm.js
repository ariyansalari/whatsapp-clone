/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSchema } from "./signInSchema";
import { loginUser } from "system";
export const useLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: "onSubmit",
  });
  const loginData = async (data) => {
    let res= await dispatch(loginUser({...data}))
    if(res?.payload?.user) navigate('/')
  };

  return {
    register,
    watch,
    errors,
    handleSubmit,
    navigate,
    dispatch,
    loginData,
  };
};
