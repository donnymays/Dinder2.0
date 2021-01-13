import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function Home() {

  return(
    <div>
      <h1>Dinder!</h1>
      <Link to="/signin">Sign In</Link>
    </div>
  )
}

export default Home;