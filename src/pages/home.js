import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="jumbotron mt-5">
        <h1 className="display-4">Aplicación de Cursos</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Link className="btn btn-success btn-lg" to="/cursos">Ver todos los cursos</Link>
      </div>
    )
  }
}

export default Home