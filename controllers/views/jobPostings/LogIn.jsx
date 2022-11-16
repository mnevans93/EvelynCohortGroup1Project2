const React = require('react')
const Default = require('../layouts/Default.jsx.js')
const loginRoute = "/login"
class Login extends React.Component {
    constructor (props) {
      super(props)
    }

    render () {
        return (
          <Default title='Login Page'>
                <form method='POST' action={`${loginRoute}?_method=POST`}>
                    <label> Username: <input type='text' placeholder='username' name='username' /></label>
                    <label> Password: <input type='password' placeholder='password' name='password' /></label>
                    <input type='submit' value='Login' />
                </form>
          </Default>
        )
    }
}

module.exports = Login