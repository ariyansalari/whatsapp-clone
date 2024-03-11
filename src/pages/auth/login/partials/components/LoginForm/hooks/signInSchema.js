import * as yup from "yup";
export const signInSchema = yup.object({
  email: yup
    .string()
    .required("email address is required")
    .email("Invalid email address."),
  password: yup
    .string()
    .required("Password is required.")
  
});
