import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './component/Home'
import Weekly from './component/Weekly'
import WeeklyBattle from './component/WeeklyBattle'
import Popular from './component/Popular'
import PopularBattle from './component/PopularBattle'
import Favorites from './component/Favorites'
import './App.css'


class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     theme: localStorage.getItem('theme') ?? 'ligth'
  //   }
  // }

  // switchDarkMode = () => {
  //   const newMode = this.state.theme === 'light' ? 'dark' : 'light'
  //   localStorage.setItem('theme', newMode)
  //   this.setState({ theme: newMode })
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a><Link className="navbar-brand" to="/">Home</Link></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a> <Link className="nav-link active" to="/weekly">Weekly</Link> </a>
                  </li>
                  <li className="nav-item">
                    <a> <Link className="nav-link active" to="/weekly-battle">WeeklyBattle</Link> </a>
                  </li>
                  <li className="nav-item">
                    <a> <Link className="nav-link active" to="/popular">Popular</Link> </a>
                  </li>
                  <li className="nav-item">
                    <a> <Link className="nav-link active" to="/popular-battle">PopularBattle</Link> </a>
                  </li>
                  <li className="nav-item">
                    <a> <Link className="nav-link active" to="/favorites">Favorites</Link> </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
        </Switch>



      </BrowserRouter>
    )
  }

}

export default App
