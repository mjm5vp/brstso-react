import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './NavBar'

function Index() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  )
}

export default AppRouter
