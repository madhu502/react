import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const UserRoutes = () => {
  //get User information
  const user = JSON.parse(localStorage.getItem('user'))

  //check user
  //check isAdmin =true
  //if true : Access all the routes of admin (Outlet)
  //if false : redirect to login page

  return user != null ?  <Outlet /> : <Navigate to={"/login" }/>
 
}

export default UserRoutes
