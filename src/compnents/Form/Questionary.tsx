import { useContext } from "react";
import { Context } from "../../context/MyContext";
import { IconErrorInfo } from "./IconErrorInfo";

const Questionary = () => {

  const { formData, handleChange, errorEmail } = useContext(Context)

  return (
    <section className="mt-5 flex flex-col gap-5">
      <label className="questions">Full Name
        <input
          name="fullName"
          className="questionsInput"
          required
          type="text"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>

      <label className="questions" >Email Address
        <input
          name="email"
          className={`${ errorEmail ? 'InputError': 'questionsInput'}`}
          required
          type="text"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        {
          errorEmail &&
          <p className="flex gap-2 items-center">
            <IconErrorInfo /> <span className="text-orange-700"> Please enter a valid email address.</span>
          </p>
        }
      </label>

      <label className="questions">GitHub UserName
        <input
          name="userName"
          className="questionsInput"
          required
          type="text"
          placeholder="@yourusername"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>

    </section>
  )
};

export { Questionary };