import { Fragment } from 'react';
import Nav from '../../layout/header/component/nav/nav.component';
import './modal-menu.styles.scss';

const ModalMenu = ({onCloseMenu}) => {
  return (
    <Fragment>
      <div className="menu-modal__background">
      </div>
      <div className="menu-modal__container">
          <Nav onCloseMenu={onCloseMenu}/>
      </div>
    </Fragment>
  )
}

export default ModalMenu;