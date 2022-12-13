import './heading-fifth.styles.scss';

const HeadingFifth = ({children, marginBottom}) => {
  const util = marginBottom ? 'uti-margin-bottom' : ''
  return <h5 className={`heading-fifth ${util}`}>{children}</h5>			
}
export default HeadingFifth