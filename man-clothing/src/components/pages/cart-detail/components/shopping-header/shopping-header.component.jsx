import GridLayout from "../../../../layout/grid/grid.component";
import "./shopping-header.styles.scss";

const ShoppingHeader = () => {
  return (
    <div className="shopping__header">
      <GridLayout noGutter>
        <div className="col col-5 shopping__header--1">
          <h4 className="heading-fourth">
            Sản phẩm
          </h4>
        </div>
        <div className="col col-3 shopping__header--2">
          <h4 className="heading-fourth">
            số lượng
          </h4>
        </div>
        <div className="col col-3 shopping__header--3">
          <h4 className="heading-fourth">
            tổng
          </h4>
        </div>
        <div className="col col-1 shopping__header--4">
        </div>
      
      </GridLayout>
    </div>
  )
}

export default ShoppingHeader;