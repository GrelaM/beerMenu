import { Button } from 'antd'

import './button.css'

interface BtnProps {
  name: string
  onClick?(): void
}

const Btn: React.FC<BtnProps> = props => {
  return <Button type="primary" className="button" onClick={props.onClick}>{props.name}</Button>
}

export default Btn;