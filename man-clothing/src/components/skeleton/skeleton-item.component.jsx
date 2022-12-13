import { Fragment } from 'react';
import './skeleton-item.styles.scss';

const SkeletonItem = ({number, big='', medium='', small='', fast='', slow='', full=''}) => {
  const list = new Array(number).fill(number).map((_, index) =>  {
    return <div key={index} className={`skeleton ${big && 'skeleton__big'} ${medium&& 'skeleton__medium'} ${small && 'skeleton__small'} ${fast && 'skeleton__fast'} ${slow && 'skeleton__slow'} ${full && 'skeleton__full'}`}></div>
})
  return (
    <Fragment>
      {list}
    </Fragment>
  )
}

export default SkeletonItem;