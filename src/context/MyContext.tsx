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
  }

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLogin(true)
    setSubmitData(formData)
  }
  useEffect(() => {
    console.log("Estado en App actualizado:", submitData);
  }, [submitData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  }

  const value: ContextProps = {
    isLogin,
    setIsLogin,
    handleSubmit,
    handleChange,
    handleReset,
    formData,
    submitData,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
};

export { Context, MyContext };