import React, { useState, useEffect } from "react";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import NavBar from './NavBar';
import Carousel from './Carousel';
import Team from "./team.json";
import TeamCard from './TeamCard';
import Footer from './Footer';

import ResponsiveVideo from './ResponsiveVideo';

export default function Home() {

  const [isVideoHidden, setIsVideoHidden] = useState(false);
  const [isContentHidden, setIsContentHidden] = useState(false);
  const [isVideoRemoved, setIsVideoRemoved] = useState(false);

  useEffect(() => {
    if (isVideoHidden) {
      const timer = setTimeout(() => {
        setIsVideoRemoved(true);
      }, 240);

      return () => clearTimeout(timer);
    }
  }, [isVideoHidden]);

  return (
    <>
      <Head>
        <title>Azuki NYC 🗽⛩️</title>
        <meta name="description" content="Say Less Do More - Supported by Community, for the Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isVideoRemoved && (
        <div style={{ backgroundColor: 'black' }}>
          <ResponsiveVideo
            onButtonClick={() => {
              setIsContentHidden(!isContentHidden);
              setIsVideoHidden(!isVideoHidden);
            }}
            isVideoHidden={isVideoHidden}
          />
        </div>
      )}

      <div className={isContentHidden ? styles.contentContainer : styles.contentContainerHide}>

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

          <br />
          <div className={styles.highlight}>
            Say Less Do More - Supported by Community, for the Community <br />
          </div>

        </main>

        <Footer />
      </div>

    </>
  )
}
