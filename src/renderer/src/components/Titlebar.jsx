import './titlebar.scss'
import brand_icon from '../assets/icon.svg'
import { IoClose, IoRemove } from 'react-icons/io5'
import Resmax from './Resmax'

const close = () => {
  ipc.send('close')
}
const minimize = () => {
  ipc.send('minimize')
}

export default function Titlebar() {
  return (
    <div className="titlebar">
      <div className="brand">
        <img src={brand_icon} />
      </div>
      <div className="navigation">
        <div id="minimize" onClick={minimize}>
          <IoRemove />
        </div>
        <Resmax/>
        <div id="close" onClick={close}>
          <IoClose />
        </div>
      </div>
    </div>
  )
}
