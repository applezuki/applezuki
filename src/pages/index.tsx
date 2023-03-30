import React from "react";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import NavBar from './NavBar';
import Carousel from './Carousel';
import Team from "./team.json";
import TeamCard from './TeamCard';
import Footer from './Footer';

export default function Home() {

  return (
    <>
      <Head>
        <title>Azuki NYC 🗽⛩️</title>
        <meta name="description" content="Say Less Do More - Supported by Community, for the Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Carousel />

      <main className={styles.main} id={'team'} style={{ backgroundColor: 'rgb(230, 230, 230)' }}>

        <h1 className={styles.teamTitle}>
          TEAM
        </h1>

        <div className={styles.grid}>
          {/* team */}
          {
            Team.map((teamMember, index) => (
              <TeamCard key={index} teamMember={teamMember} />
            ))
          }
          {/* liberty */}
          {
            <div
              className={styles.libertyCard}
              style={{
                backgroundImage: `url('./team/liberty_bright.png')`
              }}
            >
              <div className={styles.membership}>Membership<br /> coming soon...?</div>
            </div>
          }
        </div>

        <br/>
        <div className={styles.highlight}>
          Say Less Do More - Supported by Community, for the Community <br />
        </div>

      </main>

      <Footer />
    </>
  )
}
