import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { addMinus, topup, ajaxcall, dash } from "./Actions";
import { Switch } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Button from './button/Button'
import Home from './Home'
import Menu from './Menu'
import Source from './Source'
import Contact from './Contact'

function Add({ valOne, valTwo, add, remove, apicall, valAjax, sagacall }) {

  useEffect(() => {
    add();
  }, []);

  const [ state, setState ] = useState({
    name: '',
    track: '',
    casual: '',
    philips: ''
  })  

  const handleChange = (e) => {
    const getState = { ...state }
    getState[e.target.name] = e.target.value
    setState(getState)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apicall(state)
  }

  const fileChange = (e) => {
    const file = e.target.files
    const formdata = new FormData()
    formdata.append('img', file[0])
  }

  return (
    <>
      <div data-testid='Add_' style={{ display: 'flex' }}>
        <div style={{ width: "20%", background: "brown", color: "white" }}>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="menu">Menu</Link></li>
            <li><Link to="source">Source</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
          <Switch>
            <ProtectedRoutes path='/home' component={Home} />
            <ProtectedRoutes path='/menu' component={Menu} />
            <ProtectedRoutes path='/source' component={Source} />
            <ProtectedRoutes path='/contact' component={Contact} />
          </Switch>
          <br />
          <br />
          <Button btn_val='Get' />
        </div>
        <div style={{ width: "40%", background: "gray", color: "white" }}>
          {valOne.map((elm, key) => (
            <div key={key}>{elm.title}</div>
          ))}
          {valTwo}
          <button onClick={add}>Add</button>
          <button onClick={remove}>Remove</button>
          <button onClick={() => sagacall(50)}>sagacall</button>
        </div>
        <div style={{ width: "40%", background: "red", color: "white" }}>
          <form onSubmit={handleSubmit}>
              <div>Name : <input type='text' name='name' onChange={handleChange} value={state.name} /></div>
              <div>Track : <input type='text' name='track' onChange={handleChange} value={state.track} /></div>
              <div>Casual : <input type='text' name='casual' onChange={handleChange} value={state.casual} /></div>
              <div>Philips : <input type='text' name='philips' onChange={handleChange} value={state.philips} /></div>
              <br />
              <br />
              <input type='file' onChange={fileChange} multiple />
              <br />
              <br />
              <button>Go</button>
          </form>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = (state) => {
  console.log(state, 'KK')
  return {
    valOne: state.red1.valOne,
    valAjax: state.red1.addedOne,
    valTwo: state.red2.valTwo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(topup()),
    remove: () => dispatch(addMinus()),
    apicall: pass_state => dispatch(ajaxcall(pass_state)),
    sagacall: value => dispatch({
      type: "DASH",
      value
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
