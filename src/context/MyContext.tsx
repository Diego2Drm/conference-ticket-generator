import React, { createContext, useEffect, useState } from "react";
import { ContextProps, InputPprops, Props } from "../utils/types";

const Context = createContext<ContextProps>({
  isLogin: false,
  setIsLogin: () => { },
  handleSubmit: () => { },
  handleChange: () => { },
  handleReset: () => { },
  formData: {
    fullName: '',
    email: '',
    userName: '',
  },
  submitData: {
    fullName: '',
    email: '',
    userName: '',
  },
  imagePrevious: '',
  handleAddImage: () => { },
  handleRemoveImage: () => { },
  errorDrag: false,
  errorEmail: false,
});

const MyContext = ({ children }: Props) => {

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState<InputPprops>({
    fullName: '',
    email: '',
    userName: '',
  });
  const [submitData, setSubmitData] = useState<InputPprops>({
    fullName: '',
    email: '',
    userName: '',
  });

  // Form
  // DRAG AND DROP
  const [imagePrevious, setimagesPrevious] = useState<string | null>(null);
  const [errorDrag, setErrorDrag] = useState(false)

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (!files || files.length === 0) return

    const maxSize = 500 * 1024;

    if (files[0].size > maxSize) {
      setErrorDrag(true)
      return;
    } else {
      setErrorDrag(false);
    }

    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      if (!e.target) return;
      setimagesPrevious(e.target?.result as string)
    };
  };

  const handleRemoveImage = () => {
    setimagesPrevious(null)
  }

  // QUESTIONARY
  const [errorEmail, setErrorEmail] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorEmail(true)
      return;
    }

    setIsLogin(true)
    setSubmitData(formData)
    setErrorEmail(false)
  }
  // useEffect(() => {
  //   console.log("Estado en App actualizado:", submitData);
  // }, [submitData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleReset = () => {
    setIsLogin(false);
    setFormData({
      fullName: '',
      email: '',
      userName: '',
    });
    setSubmitData({
      fullName: '',
      email: '',
      userName: '',
    });
    setimagesPrevious(null)
  }

  const value: ContextProps = {
    isLogin,
    setIsLogin,
    handleSubmit,
    handleChange,
    handleReset,
    formData,
    submitData,
    imagePrevious,
    handleAddImage,
    handleRemoveImage,
    errorDrag,
    errorEmail,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
};

export { Context, MyContext };