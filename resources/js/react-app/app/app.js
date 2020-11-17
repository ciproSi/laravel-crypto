import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../home/Home'
import Login from '../login/Login'
import Register from '../register/Register'
import Header from '../header/Header'

const App = () => {
    const [user, setUser] = useState(null);

    // create context with default value set to user var
    const UserContext = createContext(user);

    return (
        // this means that all components within UserContext can use this context - but then you need to specify in every
        <UserContext.Provider value={ user }>
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
        </UserContext.Provider>

        
    
    )
}

export default App;

