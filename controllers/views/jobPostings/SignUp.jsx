const React = require('react')
const Default = require('../layouts/Default.jsx.js')
const signupRoute = "/signup"
class Signup extends React.Component {
    constructor (props) {
      super(props)
    }

    render () {
        return (
          <Default title='Create New User'>
                <form method='POST' action={`${signupRoute}?_method=POST`}>
                    <label> Username: <input type='text' placeholder='username' name='username' /></label>
                    <label> Password: <input type='password' placeholder='password' name='password' /></label>
                    <label> Company Name: <input type='companyName' placeholder='Name' name='companyName' /></label>
                    <label> Company Email: <input type='companyEmail' placeholder='Email' name='companyEmail' /></label>
                    <input type='submit' value='Signup' />
                </form>
          </Default>
        )
    }
}

module.exports = Signup