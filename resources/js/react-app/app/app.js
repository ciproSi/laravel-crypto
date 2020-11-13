import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../home/Home'
import Login from '../login/Login'
import Register from '../register/Register'
import Header from '../header/Header'

const App = () => {
    const [user, setUser] = useState(null);
    
    return (

        <Router>

            <Header />

            <main>
                <Switch>
                    <Route exact path='/' children={ <Home /> } />
                    <Route path='/register' children={ <Register /> } />
                    <Route path='/login' children={ <Login /> } />
                </Switch>
            </main>
            
        </Router>
    
    )
}

export default App;

