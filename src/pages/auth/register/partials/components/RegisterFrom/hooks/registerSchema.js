import * as yup from "yup";
export const signUpSchema = yup.object({
  name: yup
    .string()
    .required("Name is required!")
    .matches(/^[a-zA-Z_ ]*$/,"No special characters allowed.")
    .min(3, "name must be between 3 and 16 character")
    .max(16, "name must be between 3 and 16 character"),
    email:yup.string().required("email address is required").email("Invalid email address."),
    status:yup.string().max(64,"status must be less than 64 characters."),
    password:yup.string().required("Password is required.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,"Password must contain at least 6 character, 1 uppercase , 1 lowercase , 1 number and 1 special charcter")


});
