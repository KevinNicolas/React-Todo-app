import { IconType } from "react-icons"
import styled from "styled-components"

const TodoBookBtnStyles = styled.div`
  .todo-book-container {
    --todo-book-size: 10rem;

    background: var(--button-background);
    padding: 1rem;
    display: flex;
    flex-flow: column;
    width: var(--todo-book-size);
    height: var(--todo-book-size);
    border-radius: 10px;
    gap: 1rem;
    cursor: pointer;
    transition: all 300ms linear;

    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }

    .title {
      font-size: 1.2rem;
      font-weight: 500;
    }

    span { color: var(--text-color-dark) }

    -webkit-box-shadow: 0px 10px 16px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 16px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 16px 1px rgba(0,0,0,0.75);
  }
`

interface Props {
  icon: IconType
  title?: string
}

export const TodoBookBtn = ({ icon, title }: Props) => {
  return (
    <TodoBookBtnStyles>
      <div className="todo-book-container center">
        <span>{ icon({ size: 60 }) }</span>
        {
          title ?? <span className="title">{ title }</span>
        }
      </div>
    </TodoBookBtnStyles>
  ) 
}
