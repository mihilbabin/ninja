import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'
import { Ninja } from '../../types'

type NinjasProps = {
  ninjas: Ninja[];
}

const Ninjas: NextPage<NinjasProps> = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | List</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja => (
          <div key={ninja.id} className={styles.single}>
            <Link href={`/ninjas/${ninja.id}`}><a><h3>{ninja.name}</h3></a></Link>
          </div>
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<NinjasProps> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      ninjas: data
    }
  };
}

export default Ninjas