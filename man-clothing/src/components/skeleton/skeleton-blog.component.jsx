import SkeletonItem from "./skeleton-item.component";

const SkeletonBlog = () => {
  return (
    new Array(6).fill(1).map((_, index) => 
      <div className="col col-4 news-respponsive" key={index}>
        <div className="news">
          <figure className="news__img-box">
            <SkeletonItem big fast full/>
          </figure>
          <div className="news__info">
            <SkeletonItem small full fast/>
            <SkeletonItem small slow/>
            <SkeletonItem small full fast/>
          </div>
        </div>
      </div>
    )
  )
}
export default SkeletonBlog;