import {Fragment} from 'react';
import GridLayout from "../layout/grid/grid.component";
import SkeletonItem from "./skeleton-item.component";


const SkeletonProductDetail = () => {
  return  (
    <Fragment>
          <section >
            <div className="product">
              <GridLayout>
                <div className="col col-4">
                  <div className="product__mid">   
                    <SkeletonItem small fast/>
                    <SkeletonItem small slow/>
                    <SkeletonItem small fast/>
                    <SkeletonItem small slow/>
                  </div>
                </div>
                <div className="col col-8">
                  <div className="product__mid">       
                    <SkeletonItem big fast/>
                  </div>
                </div>
              </GridLayout>        
            </div> 
          </section>
          <section className="product-infor">
            <GridLayout>
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
export default SkeletonProductDetail;