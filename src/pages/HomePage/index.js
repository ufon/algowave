import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CoinsList } from 'components';
import { fetchСoins } from 'actions/coins';
import PropTypes from 'prop-types';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props.fetchСoins(this.props.accessToken);
  }

  render() {
    const { isFetching, coins } = this.props;
    return <CoinsList coins={coins} isFetching={isFetching} />;
  }
}
HomePage.propTypes = {
  coins: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchСoins: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchСoins: accessToken => dispatch(fetchСoins(accessToken))
});

const mapStateToProps = ({ app }) => ({
  coins: app.coins.items,
  isFetching: app.coins.isFetching,
  accessToken: app.auth.accessToken
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
