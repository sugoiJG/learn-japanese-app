const InputForm = ({ input, handleChange, handleSubmit }) => (
  <div className="mb-8">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        className="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2"
      />
    </form>
  </div>
);

  export default InputForm;