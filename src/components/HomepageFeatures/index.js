import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intro',
    description: (
      <>
         Pizza Wallet is a self custodial, decentralized, chain agnostic wallet that wants to be the go to place for web3 users.
      </>
    ),
  },
  {
    title: 'Mission',
    description: (
      <>
        We want to onboard the next million crypto users and make the whole process simple and fun. We want to be the community where 
        people come together to build.
      </>
    ),
  },
  {
    title: 'Vision',
    description: (
      <>
        We want to be the most user centric wallet in the crypto space. We want to be a wallet built by the community for the community
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
