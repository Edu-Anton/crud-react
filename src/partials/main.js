import React, {Component} from 'react'
import './main.scss'
import Home from '../pages/home'
import Cursos from '../pages/cursos'
import Form from '../pages/form'
import { Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cursos" component={Cursos}/>
          <Route path="/nuevo-curso" component={Form}/>
        </Switch>
      </main>
    )
  }
}

export default Main 