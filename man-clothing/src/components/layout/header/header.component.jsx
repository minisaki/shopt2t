
import Logo from "./component/logo/logo.component";
import Nav from "./component/nav/nav.component";
import Navigation from "./component/navigation/navigation.conponent";
import GridLayout from "../grid/grid.component";
import Search from "./component/search/search.component";
import { SlMenu } from "react-icons/sl";
import {TfiClose} from 'react-icons/tfi';
import './header.styles.scss';
import ModalMenu from '../../modal/modal-menu/modal-menu.component';
import { useState } from "react";


const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const hanldeToggleMenu = () => {
		setShowMenu(!showMenu)
	}
	const hanldeToggleCloseMenu= () => {
		setShowMenu(false)
	}
  return (
    <header className="header">
			<GridLayout>
				<div className="col col-1 header__logo">
						<Logo/>
				</div>
				<div className="col col-4 header__search">
						<Search/>
				</div>
				<div className="col col-5 header__nav">
					<Nav/>
				</div>
				<div className="col col-2 header__cart">						
						<Navigation/>
				</div>
				<div className="col col-0 menu-phone">						
						<div className={`menu__icon-box ${showMenu ? 'active' : ''}`} onClick={hanldeToggleMenu}>
							<TfiClose className={`menu__icon menu__icon--close ${showMenu ? 'active' : ''}`}/>
							<SlMenu className={`menu__icon ${showMenu ? '' : 'active'}`}/>
						</div>
						<ModalMenu onCloseMenu={hanldeToggleCloseMenu}/>
				</div>
			</GridLayout>			
	</header>
	
  )
}
export default Header;