import React, { useState } from 'react'

const Register = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleChange = (e) => {
        const allowedNames = ['name', 'email', 'password', 'password_confirmation'],
              name = e.target.name,
              value = e.target.value;

        if(-1 !== allowedNames.indexOf(name)) {
            // in setting states when we want to safe part of previous state we need to pass it as function
            setValues(prevValues => {
                return ({...prevValues,
                    [name]: value
                })
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json', //what we accept in the response
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content').valueOf()
            }
            })
        
        const responseData = await response.json();
        console.log(responseData);
        
        



    }

    return (
        <>
        <h1>Registration</h1>
        <form action="/register" className="register-form" method="post" onSubmit={ handleSubmit }>

            <div className="form-group">

                <label htmlFor="name">Name</label>

                <input type="text" name="name" value={values.name} onChange={ handleChange } />

            </div>

            <div className="form-group">

                <label htmlFor="email">Email</label>

                <input type="email" name="email" value={ values.email } onChange={ handleChange } />

            </div>

            <div className="form-group">

                <label htmlFor="password">Password</label>

                <input type="password" name="password" value={ values.password } onChange={ handleChange } />

            </div>

            <div className="form-group">

                <label htmlFor="password_confirmation">Re-type your password</label>

                <input type="password" name="password_confirmation" value={ values.password_confirmation } onChange={ handleChange } />

            </div>
            <button>submit</button>
        </form>
        </>
    )
}

export default Register;