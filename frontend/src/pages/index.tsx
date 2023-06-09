import Head from 'next/head'
import styles from '../assets/styles/Home.module.css'
import React from 'react'
import UserForm from '../components/userform'

export default function home() {
  return (
        <div className={styles.container}>
          <Head>
            <title>John Virtual Card</title>
            <meta name="John Virtual Card QR Code Generator" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <h1>QR Code Image Generator</h1>
            <UserForm />
          </div>
        </div>
  )
}
