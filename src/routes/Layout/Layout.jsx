import React from 'react'
import './layout.scss'
import { Outlet, Link } from 'react-router-dom'
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from 'react-router-dom';



export default function Layout() {
  return (
    <div>
        <Outlet />
    </div>
  )
}
