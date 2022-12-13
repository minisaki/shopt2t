import GridLayout from '../../../../layout/grid/grid.component';
import ShoppingAside from '../shopping-aside/shopping-aside.component';
import ShoppingList from '../shopping-list/shopping-list.comnent';
import './shopping.styles.scss';

const Shopping = () => {

	
	
  return (
    <div className="shopping">
				<GridLayout>
					<div className="col col-9 shopping-left-responsive">
						<ShoppingList/>
					</div>
					<div className="col col-3 shopping-right-responsive">
						<ShoppingAside/>
					</div>
				</GridLayout>	
				
		</div>
  )
}

export default Shopping;