
const FormTextarea = ({label, register, error, ...options}) => {
  return (
    <div className="form__group">
        <label htmlFor="note" className="form__label textarea-field">{label}</label>
        <textarea  
          className="form__input"
          {...register(options.name)}
          {...options}
        />
        <p>{error[options.name]?.message}</p>
      </div>
  )
}
export default FormTextarea;