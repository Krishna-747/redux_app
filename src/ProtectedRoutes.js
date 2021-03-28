import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoutes = ({ component: Cmp, path }) => (
    <Route render = { (props) => true ? <Cmp { ...props } name={path} /> : <Redirect to="/home" /> } />
)

export default ProtectedRoutes