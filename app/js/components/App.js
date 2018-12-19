import React, { useState } from 'react'
import { app as styles } from '../styles'

const App = () => {
  const [src, setSrc] = useState('')

  return (
    <div>
      <button onClick={getManggo}>
        Summon a chonker!
      </button>
      <div style={styles.imgHolder}>
        <img style={styles.img} src={src}></img>
      </div>
    </div>
  )

  async function getManggo() {
    const imgData = await (await fetch('http://localhost:3000')).blob()
    const imageUrl = URL.createObjectURL(imgData)
    setSrc(imageUrl)
  }

}

export default App
