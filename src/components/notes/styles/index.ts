import styled from "styled-components"

import Text from "../../text/text"

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 100%;
`

const StyledInput = styled.input(({ theme }) => {
  const {
    color: { link },
    settings: { medium, large }
  } = theme

  return `
    margin: ${large.size} ${medium.size};
    border-bottom: 1px solid ${link}
  `
})

const StyledTitle = styled(Text)(({ theme }) => {
  const {
    color: { special },
    settings: {
      medium: { size }
    }
  } = theme
  return `
    flex: 1 100%;
    border-bottom: 1px solid ${special};
    text-indent: ${size}
  `
})

const StyledNotesList = styled.div`
  flex: 1 100%;
`

const StyledNotesListItem = styled(Text)(({ theme }) => {
  const {
    color: { special },
    settings: {
      medium: { size }
    }
  } = theme
  return `
    display: flex;
    align-items: center;
    padding: .8rem 0;
    border-bottom: 1px solid ${special};
    text-indent: ${size}
  `
})

const StyledListItemRightActions = styled.span`
  display: flex;
  margin-left: auto;
`

const StyledActionItem = styled.span`
  display: flex;
  margin: 0 0.8rem;
  cursor: pointer;
  transition: opacity 0.4s linear;

  svg {
    vertical-align: middle;
  }

  &:hover {
    opacity: 0.8;
  }
`

export {
  StyledWrapper,
  StyledInput,
  StyledTitle,
  StyledNotesList,
  StyledNotesListItem,
  StyledListItemRightActions,
  StyledActionItem
}
