export type Props = {
  children: React.ReactNode
}

export type ContextProps = {
  isLogin: boolean,
  setIsLogin: (value: boolean) => void,
  formData: InputPprops,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleReset: () => void,
  submitData: InputPprops,
  imagePrevious: string | null,
  handleAddImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleRemoveImage: () => void,
  errorDrag: boolean
  errorEmail: boolean
  isLoading: boolean
}

export type InputPprops = {
  fullName: string,
  email: string,
  userName: string,
}