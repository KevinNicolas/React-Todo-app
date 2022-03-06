import { useState } from "react";
import { IconType } from "react-icons"
import styled from "styled-components"
import { iconList } from "../../../utils/get-icons-list"

interface StyleProps {
  showIconList: boolean;
  iconsQuantity: number;
}

const IconsDropdownStyles = styled.div<StyleProps>`
  .icons-button {
    color: var(--text-color-dark);
    padding: .2rem;
    border-radius: 5px;
  }
  
  .icon-list-container {
    position: relative;
    transition: opacity 300ms ease-in-out;
    opacity: ${({ showIconList }) => showIconList ? 1 : 0};
    z-index: ${({ showIconList }) => showIconList ? 1 : -1};

    .icon-list-wrapper {
      background: var(--button-background-2);
      position: absolute;
      overflow: hidden;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      min-width: ${({ iconsQuantity }) => `${.9 * iconsQuantity}rem`};
      top: .1rem;
      left: .5rem;
      border-radius: 5px;

      .icon-container {
        background: transparent;
        transition: background 300ms ease-in-out;
        padding: .5rem;
        &:hover { background: var(--primary-hover) }
      }
    }
  }
`

export const IconsDropdown = () => {
  const [showIconList, setshowIconList] = useState(false)
  const [selectedIcon, setselectedIcon] = useState<JSX.Element>(iconList[0]({ size: 24 }))

  const selectIcon = ({ icon }: { icon: IconType }) => {
    setselectedIcon(icon({ size: 24 }))
    setshowIconList(false)
  }

  return (
    <IconsDropdownStyles showIconList={showIconList} iconsQuantity={iconList.length}>
      <div className="icons-dropdown-container">
        <button className="icons-button" onClick={() => { setshowIconList(!showIconList) }}>
          { selectedIcon }
        </button>
        <div className="icon-list-container">
          <div className="icon-list-wrapper">
            {
              iconList.map((Icon: IconType) => (
                <div 
                  key={iconList.indexOf(Icon)}
                  className="icon-container center"
                  onClick={() => { selectIcon({ icon: Icon }) }}
                >
                  <Icon size={20} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </IconsDropdownStyles>
  )
}
