import { useRef, useState } from "react";
import { IconType } from "react-icons"
import styled from "styled-components"
import { Dropdown, DropdownChildFunctions } from "../../../components/Dropdown";
import { iconList } from "../../../utils/get-icons-list"

interface StyleProps {
  iconsQuantity: number;
}

const IconsDropdownStyles = styled.div<StyleProps>`
  .icons-button {
    color: var(--text-color-dark);
    padding: .2rem;
    border-radius: 5px;
  }

  .icon-list-wrapper {
    background: var(--button-background-2);
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    max-width: ${({ iconsQuantity }) => `${.9 * iconsQuantity}rem`};
    border-radius: 5px;

    .icon-container {
      background: transparent;
      transition: background 300ms ease-in-out;
      padding: .5rem;
      &:hover { background: var(--primary-hover) }
    }
  }
`

export const IconsDropdown = () => {
  const [selectedIcon, setselectedIcon] = useState<JSX.Element>(iconList[0]({ size: 24 }))
  const dropdownReference = useRef<DropdownChildFunctions>({ showContent: (value: boolean) => {} })

  const selectIcon = ({ icon }: { icon: IconType }) => {
    setselectedIcon(icon({ size: 24 }))
    dropdownReference.current.showContent(false)
  }

  return (
    <IconsDropdownStyles iconsQuantity={iconList.length}>
      <Dropdown
        key={'IconsDropdown'}
        childFunctions={dropdownReference}

        Button={(
          <button className="icons-button">
            { selectedIcon }
          </button>
        )}

        contentPosition={({
          top: '.1rem',
          left: '.5rem'
        })}
        Content={(
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
        )}
      />
    </IconsDropdownStyles>
  )
}
