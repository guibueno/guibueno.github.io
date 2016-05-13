import React from 'react';
import CategoryList from './CategoryList';

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<CategoryList />);
  }
}

Dashboard.defaultProps = { };

export default Dashboard;
