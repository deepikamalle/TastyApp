import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'

class Login extends Component {
  state = {username: '', password: '', showLoginErr: false, errMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errMsg = data.error_msg
      this.setState({showLoginErr: true, errMsg})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {showLoginErr, errMsg} = this.state
    return (
      <div className="login-route">
        <div className="form-card-container">
          <form onSubmit={this.onSubmitLoginForm} className="login-form">
            <img
              className="website-logo-login"
              alt="website logo"
              src="https://res.cloudinary.com/daltzmh3x/image/upload/v1694258902/loginimage_t96qlt.png"
            />
            <h1 className="website-name-login">Tasty Kitchens</h1>
            <h1 className="login-form-heading">Login</h1>
            <div className="input-boxes">
              <label className="login-input-label" htmlFor="username">
                USERNAME
              </label>
              <input
                onChange={this.onChangeUsername}
                className="login-input"
                id="username"
                type="text"
              />
            </div>
            <div className="input-boxes">
              <label className="login-input-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                onChange={this.onChangePassword}
                className="login-input"
                id="password"
                type="password"
              />
            </div>
            {showLoginErr && <p className="error-msg">*{errMsg}</p>}
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="website-landing-img-container-md">
          <img
            className="website-bg-img-md"
            alt="website login"
            src="https://res.cloudinary.com/daltzmh3x/image/upload/v1694262212/Login_filled_oxrxms.png"
          />
        </div>
      </div>
    )
  }
}
export default Login
