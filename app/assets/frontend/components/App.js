// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
//import Header from './Header';
//import Footer from './Footer';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
