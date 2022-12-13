
const FormInput = ({label, register, error,...inputOptions}) => {
  
  return (
    <div className="form__group">
      <label htmlFor="name" className="form__label">{label}</label>
      <input 
        {...register(inputOptions.name)}
        className="form__input"        
        {...inputOptions}
        />
        <p className="form__error">{error[inputOptions.name]?.message}</p>
    </div>
  )
}
export default FormInput;