import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { signUpSchema } from "./registerSchema"
export const useRegister = () => {
  const {register,handleSubmit,formState:{errors},watch}=useForm({
resolver:yupResolver(signUpSchema),
mode:"onSubmit"
  })
  const registerData=(data)=>{
console.log(data);
  }
  return {
    register,
    handleSubmit,
    registerData,
    watch,
    errors
  }
}
