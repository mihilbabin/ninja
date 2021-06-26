import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
  <nav>
    <div className="logo">
      <Image src="/logo.png" alt="Ninjas List" width="128" height="77" unoptimized/>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/ninjas">Ninja Listing</Link>
  </nav>
)

export default Navbar
