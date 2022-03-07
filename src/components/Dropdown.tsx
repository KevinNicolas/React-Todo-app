import { useState } from "react"
import styled from "styled-components"

interface ContentPosition {
  left: string
  top: string
}

interface StylesProps {
  showContent: boolean
  contentPosition: ContentPosition
}

const DropdownStyles = styled.div<StylesProps>`
  .dropdown-content {
    position: absolute;
    transition: opacity 300ms ease-in-out;
    opacity: ${({ showContent }) => showContent ? 1 : 0};
    z-index: ${({ showContent }) => showContent ? 1 : -1};

    .dropdown-wrapper {
      position: relative;
      top: ${({ contentPosition }) => contentPosition.top};
      left: ${({ contentPosition }) => contentPosition.left}
    }
  }
`

interface Props {
  Button: JSX.Element
  Content: JSX.Element
  contentPosition?: ContentPosition
}

export const Dropdown = ({ Button, Content, contentPosition = { left: '0', top: '0' } }: Props) => {
  const [showContent, setshowContent] = useState(false)
  
  return (
    <DropdownStyles showContent={showContent} contentPosition={contentPosition}>
      <div className="dropdown-container">
        <div className="dropdown-button" onClick={() => { setshowContent(!showContent) }}>
          { Button }
        </div>
        <div className="dropdown-content">
          <div className="dropdown-wrapper">
            { Content }
          </div>
        </div>
      </div>
    </DropdownStyles>
  )
}
