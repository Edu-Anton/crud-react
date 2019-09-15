import React, {Component} from 'react'


class Form extends Component {
  render() {
    return (
      <>
      <h1 className="my-5">Registro de Cursos</h1>
      <div className="row">

        <div className="col-6 offset-3">
          <form>
            <div className="form-group text-left">
              <label htmlFor="name" >Nombre</label>
              <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group text-left">
              <label htmlFor="description">Descripción</label>
              <textarea className="form-control" id="description"></textarea>
            </div>
            <div className="form-group text-left">
              <label htmlFor="imagen">Imagen</label>
              <input type="file" className="form-control-file" id="imagen"/>
            </div>
            <button type="submit" className="btn btn-success btn-block my-5">Enviar</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}

export default Form