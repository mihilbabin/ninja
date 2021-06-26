import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>There is nothing here</h2>
      <p><Link href="/">Go back home</Link></p>
    </div>
  )
}

export default NotFound
