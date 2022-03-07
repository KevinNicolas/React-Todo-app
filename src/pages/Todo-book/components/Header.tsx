import styled from "styled-components"
import { IconsDropdown } from "./Icons-dropdown"
import { MdChevronLeft } from 'react-icons/md'
import { PriorityDropdown } from "./Priority-dropdown"

const HeaderStyles = styled.div`
  .header-container {
    --column-size: 3rem;

    background: green;
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: var(--column-size) calc(100% - var(--column-size));
    padding: .5rem;
  }

  .back-button-container {
    grid-row: 1 / -1;
    
    button {
      background: transparent;
      transition: color 300ms ease-in;
      color: white;

      &:hover { color: var(--primary) }
    }
  }

  .row {
    display: flex;
    flex-flow: row;
    gap: 1rem;
    align-items: center;
  }

  input {
    padding: .5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    color: var(--text-color-dark);
  }

  .title-container {
    width: 50%;

    input { width: 100%; }
  }
`

export const Header = () => {
  return (
    <HeaderStyles>
      <div className="header-container full">
        <div className="back-button-container">
          <button>
            <MdChevronLeft size={40} />
          </button>
        </div>
        <div className="row">
          <IconsDropdown />
          <div className="title-container">
            <input className="title-input" type="text" placeholder="Title..." />
          </div>
          <PriorityDropdown />
        </div>
      </div>
    </HeaderStyles>
  )
}
