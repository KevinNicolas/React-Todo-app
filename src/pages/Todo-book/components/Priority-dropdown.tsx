import { useState } from "react"
import { IconType } from "react-icons/lib"
import { MdOutlineArrowForward, MdOutlineArrowUpward, MdOutlineRemove, MdOutlineSouth } from "react-icons/md"
import styled from "styled-components"
import { Dropdown } from "../../../components/Dropdown"

const Styles = styled.div`
  .pDropdown-content, .pDropdown-button {
    background: var(--button-background-2);
    border-radius: 5px;
    min-width: 7rem;
    overflow: hidden;
  }

  .pDropdown-content, .pDropdown-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pDropdown-button, .item-container { cursor: pointer; }

  .pDropdown-button { 
    gap: .2rem;
    padding: .5rem;
  }

  .pDropdown-content {
    flex-flow: column;
  }

  .item-container { 
    display: grid;
    grid-template-columns: 35% 65%;
    width: 100%;
    padding: .4rem .7rem;
    background: transparent;
    transition: background 300ms ease-in-out;

    &:hover {
      background: var(--button-background);
    }
  }
`

export const PriorityDropdown = () => {
  const ICONSIZE = 24 as const
  interface PriorityItem { icon: IconType, label: string, colorClass: string }

  const priorityList: PriorityItem[] = [
    { icon: MdOutlineArrowUpward, label: 'High', colorClass: 'alert' },
    { icon: MdOutlineArrowForward, label: 'Medium', colorClass: 'warn' },
    { icon: MdOutlineSouth, label: 'Low', colorClass: 'success' }
  ]
  
  const [selectedPriority, setselectedPriority] = useState<PriorityItem>(priorityList[1])

  return (
    <Styles>
      <Dropdown
        Button={(<div className={`pDropdown-button ${selectedPriority.colorClass}`}>
          {selectedPriority.icon({ size: ICONSIZE })}
          {selectedPriority.label}
        </div>)}

        contentPosition={({
          left: '25%',
          top: '.2rem'
        })}
        Content={(<div className="pDropdown-content">
          {
            priorityList.map(({ label, icon, colorClass }: PriorityItem) => (
              <div className={`item-container ${colorClass}`} onClick={() => { setselectedPriority({ label, icon, colorClass }) }}>
                { icon({ size: ICONSIZE }) }
                { label }
              </div>
            ))
          }
        </div>)}
      />
    </Styles>
  )
}
