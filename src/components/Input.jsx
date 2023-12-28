const Input = ({
  value,
  handleChange,
  className = "",
  classNameInput = "",
  iconInput,
  ...restProps
}) => {
  return (
    <section className="relative">
      <input
        onChange={handleChange}
        value={value}
        className={`${className}`}
        {...restProps}
      />
      <img className={`${classNameInput}`} src={iconInput && iconInput} />
    </section>
  );
};

export default Input;
