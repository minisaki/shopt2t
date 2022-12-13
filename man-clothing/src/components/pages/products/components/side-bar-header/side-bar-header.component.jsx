import { HiChevronDown } from "react-icons/hi2";

const SideBarHeader = ({title, onShowBody}) => {
  return (
    <div className="sidebar__header">
        <div className="sidebar__heading">
          {title}
        </div>
        <span className="sidebar__icon " onClick={onShowBody}>
          <HiChevronDown  />
        </span>
      </div>
  )
}
export default SideBarHeader;