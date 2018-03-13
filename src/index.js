import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { App, Page1, Page2, NotFound } from './App';
import './index.css';


// Implementa las rutas aca
class Content extends React.Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/page1" />
            <Route path="page1" component={Page1} />
            <Route path="page2" component={Page2} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <Content />, // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
