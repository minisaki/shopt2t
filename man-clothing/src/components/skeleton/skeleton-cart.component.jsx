import SkeletonItem from "./skeleton-item.component";

const SkeletonCart = () => {  
  return (
    new Array(6).fill(1).map( (_, index) => (
      <div className="col col-4 cart-responsive" key={index}>
          <div>
            <SkeletonItem number={1} big fast full/>
            <SkeletonItem number={1} small full fast/>
            <SkeletonItem number={1} small slow/>
            <SkeletonItem number={1} small full fast/>
          </div>
        </div>
    ))
  )
}

export default SkeletonCart;