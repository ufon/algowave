import React from 'react';
import PropTypes from 'prop-types';
import { CoinCard } from 'components';
import styles from './styles.scss';

const CoinsList = ({ coins, isFetching }) => (
  <div className={styles.list}>
    <div className={styles.list__inner}>
      {coins.map(coin => <CoinCard key={coin.id} coin={coin} />)}
    </div>
  </div>
);

CoinsList.propTypes = {
  coins: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default CoinsList;
