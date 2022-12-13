import './heading-secondary.styles.scss';

const HeadingScondary = ({children, marginBottom}) => {
  const util = marginBottom ? 'uti-margin-bottom' : ''
  return (
    <h2 className={`heading-secondary ${util}`}>
      {children}
    </h2>
  )
}
export default HeadingScondary;