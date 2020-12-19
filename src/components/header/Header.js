import React, { useContext } from 'react'
import { theme } from '../../context'


export default function Header() {
  const {dark, setDark} = useContext(theme);

  function handleDarkMode() {
    setDark(!dark)
  }

  return (
    <div>
      {dark ? <p>Header Dark</p> : <p>Header Light</p>}
      <button onClick={handleDarkMode}> To change color</button>
    </div>
  )
}
