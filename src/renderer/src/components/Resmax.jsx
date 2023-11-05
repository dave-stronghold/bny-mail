import { IoSquareOutline, IoCopyOutline } from 'react-icons/io5'
import { useState, useEffect } from 'react'

export default function Resmax() {
  const [normal, setNormal] = useState(true)

  const handleResize = () => {
    ipc.invoke('listen').then((res) => {
      setNormal(res)
    })
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [normal])
  const resize = () => {
    ipc.send('resize')
  }
  return (
    <>
      <div id="resize" onClick={resize}>
        {normal ? <IoSquareOutline /> : <IoCopyOutline />}
      </div>
    </>
  )
}
