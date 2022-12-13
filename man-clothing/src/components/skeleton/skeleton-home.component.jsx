import { Fragment } from "react";
import GridLayout from "../layout/grid/grid.component";
import SkeletonItem from "./skeleton-item.component";

const SkeletonHome = () => {
  return (
    <Fragment>
          <section className="product-infor">
            <GridLayout>
            <div className="col col-12">
              <div className="information">
                <SkeletonItem small full fast/>
                <SkeletonItem small slow/>
              </div>
              </div>
              <div className="col col-12">
                <div className="information">  
                  <SkeletonItem big fast full/>
                </div>
              </div>
              <div className="col col-12">
                <div className="information">
                  <SkeletonItem small full slow/>
                  <SkeletonItem small fast/>
                  <SkeletonItem small full fast/>
                  <SkeletonItem small/>
                  <SkeletonItem small full fast/>
                  <SkeletonItem small slow/>
                  <SkeletonItem small full fast/>                  
                </div>
              </div>
            </GridLayout>
          </section>          
        </Fragment>
  )
}
export default SkeletonHome;