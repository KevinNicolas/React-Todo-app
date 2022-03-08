import styled from "styled-components"
import { IconsDropdown } from "./Icons-dropdown"
import { MdChevronLeft } from 'react-icons/md'
import { PriorityDropdown } from "./Priority-dropdown"

const HeaderStyles = styled.div`
  .header-container {
    --column-size: 3rem;

    /* background: green; */
    display: grid;
    grid-template-rows: repeat(3, minmax(0, 1fr));
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
    padding: 0 2rem;
  }

  .button-container {
    justify-content: flex-end;
  }

  input {
    padding: .5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    color: var(--text-color-dark);
  }

  .title-container {
    width: 70%;
  }
  input { width: 100%; }

  .btn {
    padding: .5rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 10px;
  }

  .outline { background: transparent; color: white; border: 2px solid white; }

  .btn-success { 
    background: var(--primary);
    border: 2px solid var(--primary);
    color: white
  }
`

export const Header = () => {
  const formatDate = (date: Date, { formatType }: { formatType: 'forInput' | 'forView' }): string => {
    
    const dateString: string = date.getDate().toString().length > 1 ? date.getDate().toString() : `0${date.getDate().toString()}`
    const monthString: string = (date.getMonth() + 1).toString().length > 1 ? (date.getMonth() + 1).toString() : `0${(date.getMonth() + 1).toString()}`

    switch (formatType) {
      case 'forInput': return `${date.getFullYear()}-${monthString}-${dateString}`
      case 'forView': return `${dateString}/${monthString}/${date.getFullYear()}`
    }
  }

  console.info(formatDate(new Date(), { formatType: 'forInput' }))
  return (
    <HeaderStyles>
      <div className="header-container full">
        <div className="back-button-container">
          <button>
            <MdChevronLeft size={40} />
          </button>
        </div>
        <div className="row">
          <div className="row title-container">
            <IconsDropdown />
            <input className="title-input" type="text" placeholder="Title..." />
          </div>
          <PriorityDropdown />
          <div className="date-container">
            <input type="date" defaultValue={formatDate(new Date(), { formatType: 'forInput' })} />
          </div>
        </div>
        <div className="row">
          <input className="description-input" type="text" placeholder="Description..." />
        </div>
        <div className="row button-container">
          <button className="btn outline">
            <span>Cancel</span>
          </button>
          <button className="btn btn-success">
            <span>Create</span>
          </button>
        </div>
      </div>
    </HeaderStyles>
  )
}
