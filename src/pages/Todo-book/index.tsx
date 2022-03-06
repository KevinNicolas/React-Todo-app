import styled from "styled-components"
import { Header } from "./components/Header"

const TodoBookStyles = styled.div`
  .todo-book-container {
    --header-height: 10rem;

    background: var(--background-color);
    display: grid;
    grid-template-rows: var(--header-height) calc(100% - var(--header-height));
  }
`

export const TodoBook = () => {
  return (
    <TodoBookStyles>
      <div className="page-container todo-book-container">
        <Header />
        <span>todo books</span>
      </div>
    </TodoBookStyles>
  )
}
