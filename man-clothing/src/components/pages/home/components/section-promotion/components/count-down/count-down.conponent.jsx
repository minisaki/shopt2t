
import './count-down.styles.scss';

const CountDown = ({timer}) => {
  const {days, hours, minutes, seconds} = timer
  return (
    <div className="countdown">
      <ul className="countdown__number">
        <li className="countdown__number-item">{days}</li>
        <li className="countdown__number-item">{hours}</li>
        <li className="countdown__number-item">{minutes}</li>
        <li className="countdown__number-item">{seconds}</li>
      </ul>
      <ul className="countdown__text uti-margin-bottom">
        <li className="countdown__text-item">days</li>
        <li className="countdown__text-item">hours</li>
        <li className="countdown__text-item">minutes</li>
        <li className="countdown__text-item">seconds</li>
      </ul>
    </div>
  )
}

export default CountDown;