import './heading-primary.styles.scss';

const HeadingPrimary = ({children, marginBottom}) => {
  const mgBottom = marginBottom ? 'uti-margin-bottom' : ''
  return (
    <h1 className={`heading-primary ${mgBottom}`}>{children}</h1>
  )
}

export default HeadingPrimary