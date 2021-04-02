import './header.css'

interface HeaderProps {
    headerText: string;
}

const Header: React.FC<HeaderProps> = props => {
  return <h1 className="header">{props.headerText}</h1>
}

export default Header
