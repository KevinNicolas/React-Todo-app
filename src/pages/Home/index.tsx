import styled from "styled-components"
import { TodoBookBtn } from "./components/todo-book-btn"
import { MdBook, MdOutlineAdd } from 'react-icons/md'

const HomeStyles = styled.div`
  .home-container {
    background: var(--background-color);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }

  .content-container {
    position: absolute;
    
    .button-empty {
      background: var(--primary);
      border-radius: 10px;
      padding: 1rem 2rem;
      cursor: pointer;
      transition: background 300ms linear;
      &:hover { background: var(--primary-hover); }

      span { 
        color: var(--text-color-light);
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    .todo-books-container {
      display: flex;
      flex-flow: row;
      gap: 2rem;
    }
  }
`

export const Home = () => {
  const todoBooks = ['']

  return (
    <HomeStyles>
      <div className="home-container page-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#256D1B"
            fill-opacity="1"
            d="
              M0,256L26.7,234.7C53.3,213,107,171,160,176C213.3,181,267,235,320,234.7C373.3,235,427,181,480,144C533.3,107,587,85,640,85.3C693.3,85,747,107,
              800,149.3C853.3,192,907,256,960,282.7C1013.3,309,1067,299,1120,277.3C1173.3,256,1227,224,1280,192C1333.3,160,1387,128,1413,112L1440,96L1440,
              0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,
              0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z
            "
            data-darkreader-inline-fill=""
          >
          </path>
        </svg>
        {/* ------------------------------------------------------------ */}
        <div className="content-container page-container center">
          {
            todoBooks.length > 0 
              ?
                <div className="todo-books-container">
                  <TodoBookBtn icon={MdBook} title="Todo-book" />
                  <TodoBookBtn icon={MdOutlineAdd} title="Add" />
                </div>
              :
                  <div className="button-empty">
                    <span>Add todo-book</span>
                  </div>
          }
        </div>
        {/* ------------------------------------------------------------ */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#256D1B"
            fill-opacity="1"
            d="
              M0,256L26.7,234.7C53.3,213,107,171,160,176C213.3,181,267,235,320,234.7C373.3,235,427,181,480,144C533.3,107,587,85,640,85.3C693.3,85,747,107,
              800,149.3C853.3,192,907,256,960,282.7C1013.3,309,1067,299,1120,277.3C1173.3,256,1227,224,1280,192C1333.3,160,1387,128,1413,112L1440,96L1440,
              320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,
              320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z
            "
            data-darkreader-inline-fill=""
          >
          </path>
        </svg>
      </div>
    </HomeStyles>
  )
}
