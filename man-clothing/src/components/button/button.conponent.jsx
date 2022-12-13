
import './button.styles.scss';

export const BUTTON_TYPE = {
  PRIMARY: 'primary',
  ARROW: 'arow',
  OUTLINE: 'out-line',
  CART: 'cart',
  LINE: 'line'
}

const Button = ({children, type=BUTTON_TYPE.PRIMARY, amination=false, ...orther}) => {
  const modifies = amination ? 'btn--amination' : ''
  return (
    <button 
      className={`btn btn-${type} ${modifies}`}
      {...orther}
    >
      {children}
    </button>
  )
}

export default Button;