import { useState } from "react";
import SideBarHeader from "../side-bar-header/side-bar-header.component";
import './side-bar-card.styles.scss';

const SideBarCard = ({title, children}) => {
  const [showBody, setShowBody] = useState(true)
  const onShowBody = () => {
    setShowBody(!showBody)
  }
 
  return (
    <div className="sidebar__card">
      <SideBarHeader title={title} onShowBody={onShowBody}/>
      <div className={`sidebar__body ${showBody ? 'active' : ''} `}>
        {children}
      </div>
    </div> 
  )
}

export default SideBarCard;