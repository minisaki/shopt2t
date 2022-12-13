import './heading-teriary.styles.scss';

const HeadingTeriary = ({children}) => {
  return (
    <h3 className={`heading-teriary uti-margin-bottom`}>
      {children}
    </h3>
  )
}

export default HeadingTeriary;