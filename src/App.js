import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import logo from './images/run_downhill_logo.png';

import {Page, Card, Button} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

import './App.css';

const Homepage = ({ title, subtitle }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
      </div>
      <Page title="Example application">
        <Card sectioned>
          <Button>BUTTON</Button>
        </Card>
      </Page>
    </div>
);

const Home = (props) => (
  <Homepage title=" " />
);

// Additional navigation links when needed
// const About = (props) => (
//   <Page title="About"/>
// );

// const Settings = (props) => (
//   <Page title="Settings"/>
// );

// class App extends Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//         <Route path="/settings" component={Settings}/>
//       </Router>
//     );
//   }
// }

class App extends Component { 
  render() {
    return (
      <Router history={browserHistory}>
        <Route path = '/' component={Home}/>
      </Router>
      );
  }
}
export default App;