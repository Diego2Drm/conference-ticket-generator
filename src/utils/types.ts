export type Props = {
  children: React.ReactNode
}

export type ContextProps = {
  isLogin: boolean,
  setIsLogin: (value: boolean) => void,
  formData: InputPprops,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleReset: () => void
  submitData: InputPprops
}

export type InputPprops = {
  fullName: string,
  email: string,
  userName: string,
}