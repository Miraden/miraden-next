import styled from 'styled-components'

const baseClassName = 'LeadHeader'

interface HeaderProps {
  currentView: number | null
  className?: string
}

const Header = ({ currentView, className }: HeaderProps) => {
  return (
    <StylesHeader>
      <div className={baseClassName + '_Test'}>
        Test Component {currentView}
      </div>
    </StylesHeader>
  )
}

const StylesHeader = styled.div`
  .${baseClassName} {
  }
`

export { Header }
