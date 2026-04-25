import { useState } from 'react'

const Darkmode = () => {
  const [dark, setDark] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: dark ? '#121212' : '#ffffff',
      color: dark ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '40px'
    }}>
      <button onClick={() => setDark(prev => !prev)}>
        {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <p>welcome</p>
    </div>
  )
}

export default Darkmode