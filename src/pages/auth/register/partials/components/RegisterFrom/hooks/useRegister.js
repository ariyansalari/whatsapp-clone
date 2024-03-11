/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./registerSchema";
import { useDispatch } from "react-redux";
import { changeStatus, registerUser } from "system";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const cloud_secret = process.env.REACT_APP_CLOUD_SECRET;

export const useRegister = () => {
  const dispatch = useDispatch();
  const [picture,setPicture]=useState()
  const [readablePicture,setReadablePicture]=useState('')
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
  const registerData = async (data) => {
    dispatch(changeStatus("loading"));
    if (picture) {
      await uploadImage().then(async (response) => {
        const res = await dispatch(
          registerUser({ ...data, picture: response.secure_url })
        );
        if (res.payload.user) navigate("/");
      });
    } else {
      const res = await dispatch(registerUser({ ...data, picture: "" }));
      if (res.payload.user) navigate("/");
    }
  };
  const uploadImage = async () => {
    let formData = new FormData();
    formData.append("upload_preset", cloud_secret);
    formData.append("file", picture);
    const { data } = await axios.post(
      `${process.env.REACT_APP_CLOUD_URL}/${cloud_name}/image/upload`,
      formData
    );
    return data;
  };
  return {
    register,
    handleSubmit,
    registerData,
    watch,
    errors,
    picture,
    readablePicture,
    setPicture,
    setReadablePicture
  };
};
