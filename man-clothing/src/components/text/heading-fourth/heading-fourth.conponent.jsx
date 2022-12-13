import './heading-fourth.styles.scss';

const HeadingFourth = ({children, marginBottom}) => {
  const util = marginBottom ? 'uti-margin-bottom' : ''
  return (
    <h4 className={`heading-fourth ${util}`}>{children}</h4>
  )
}

export default HeadingFourth