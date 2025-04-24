
const Questionary = () => {
  return (
    <section className="mt-5 flex flex-col gap-5">
      <label className="questions">Full Name
        <input className="questionsInput" required type="text" />
      </label>

      <label className="questions" >Email Address
        <input className="questionsInput" required type="email" placeholder="example@email.com" />

      </label>

      <label className="questions">GitHub UserName
        <input className="questionsInput" required type="text" placeholder="@yourusername" />
      </label>

    </section>
  )
};

export { Questionary };