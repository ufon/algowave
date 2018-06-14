import React from 'react';
import './styles.scss';

const date = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const AppHeader = () => (
  <header>
    <time>{date.toLocaleString('ru', options)}</time>
  </header>
);

export default AppHeader;
