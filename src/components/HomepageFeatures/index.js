import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intro',
    description: (
      <>
         Pizza Wallet is a self custodial, decentralized, chain agnostic, service aggregator wallet. The one stop shop for web3 users.
      </>
    ),
  },
  {
    title: 'Mission',
    description: (
      <>
        We aim to make the crypto onboarding process as simple and enjoyable as eating a slice of pizza.
      </>
    ),
  },
  {
    title: 'Vision',
    description: (
      <>
        Pizza is the most beloved food in the world. We are bringing crypto use cases to it's community through the most user experience focused wallet in the space.
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
