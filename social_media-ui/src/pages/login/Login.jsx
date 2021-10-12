import "./login.css";
import logo from"./hrLogo.png";

export default function Login() {
  return (
    <div className="opaqueLayer">
      <div className="loginWrapper">
        <div className="loginBox">
          <div className="logoBox">
            <img className="logo" src={logo} alt="logo"></img>
          </div>
          <form className="loginForm" onSubmit>
            <input className="email" type="text" placeholder="email" />
            <input className="password" type="text" placeholder="password" />
            <div className="loginButton">
              <button className="loginBTN">Login</button>
            </div>
            <div className="orBox">
              <p className="or">or</p>
            </div>
            <div className="createAccBox">
              <p className="createAccount">Don't have an Account?</p>
            </div>
            <div className="signupButton">
              <button className="signupBTN">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
