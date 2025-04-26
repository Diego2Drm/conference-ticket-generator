import { useContext } from "react";
import { Context } from "../../context/MyContext";

const Questionary = () => {

  const { formData, handleChange } = useContext(Context)

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
          className="questionsInput"
          required
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
        />

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