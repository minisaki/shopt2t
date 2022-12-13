import './grid.styles.scss';

const GridLayout = ({noGutter, reverse, children}) => {
  return (
    <div className="grid wide">
      <div className={`row ${ noGutter ? 'no-gutters': ''} ${ reverse ? 'row-reverse': ''} `}> {children} </div>
    </div>
  )
}

export default GridLayout;