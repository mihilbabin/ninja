import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'
import { Ninja } from '../../types'

type SingleNinjaProps = {
  ninja: Ninja;
}

const SingleNinja: NextPage<SingleNinjaProps> = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja List | {ninja.name}</title>
      </Head>
      <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json() as Ninja[];
  const ids = data.map(({ id }) => ({ params: { id: id.toString() }}))

  return {
    paths: ids,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<SingleNinjaProps> = async (context) => {
  const { id } = context.params!;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  return {
    props: {
      ninja: data
    }
  };
}

export default SingleNinja