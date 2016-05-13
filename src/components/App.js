require('normalize.css/normalize.css');
require('styles/flex-layout.css');
require('styles/main.css');
require('styles/category-list.css');
require('styles/category.css');
require('styles/category-themes.css');
require('styles/practice.css');

import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    minHeight: '450px',
    overflow: 'hidden'
  },
  title: {
    cursor: 'pointer'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  handleTouchTap = () => {
    this.context.router.push('/');
  };

  render() {
    // const username = 'Daniel';
    // iconElementRight={<FlatButton label={username} href="/profile" linkButton={false}/>}

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="fit content layout vertical" style={styles.container}>
          <AppBar
            title={<span style={styles.title}>LanguageBug</span>}
            showMenuIconButton={false}
            onTitleTouchTap={this.handleTouchTap}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.defaultProps = { };

export default App;
