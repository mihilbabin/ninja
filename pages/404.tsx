import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>There is nothing here</h2>
      <p><Link href="/">Go back home</Link></p>
    </div>
  )
}

export default NotFound
