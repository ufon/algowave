import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const CoinCard = ({ coin }) => (
  <div className={styles.card}>
    <div className={styles.card__image} />
    <div className={styles.card__content}>
      <h1 className={styles.card__title}>
        <a target="_blank" href={coin.website_url}>
          {coin.name}
        </a>
      </h1>
      <p className={styles.card__description}>{coin.price}</p>
    </div>
    <div className={styles.card__footer}>
      <span className={styles.card__time}>test</span>
      <span className={styles.card__count}>test</span>
    </div>
  </div>
);

CoinCard.propTypes = {
  coin: PropTypes.object.isRequired
};

export default CoinCard;
