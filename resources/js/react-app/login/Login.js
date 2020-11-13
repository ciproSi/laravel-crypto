import React, { useState } from 'react'


const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const allowedNames = ['password', 'email'],
              name = e.target.name,
              value = e.target.value;
        
        if (-1 !== allowedNames.indexOf(name)) {
            setValues(prevValues => {
                return ({...prevValues,
                        [name]: value
                })
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })

        const responseData = await response.json();
        
        console.log(responseData);
    }

    return (
        <>
        
        <h1>login component</h1>
        <div className="form">
            <form action="/login" method="POST" onSubmit={ handleSubmit }>
                <div className="form-group">

                    <label htmlFor="email">Email</label>

                    <input type="text" name="email" value={ values.email } onChange={ handleChange } />

                </div>

                <div className="form-group">

                    <label htmlFor="name">Password</label>

                    <input type="password" name="password" value={ values.password } onChange={ handleChange } />

                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Login;