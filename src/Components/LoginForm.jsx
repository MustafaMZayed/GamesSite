
import '../assets/css/Auth.css'; // تأكد أن المسار صحيح


const LoginForm = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <p>Or sign in with:</p>
        <button className="social-button google">
        <i className="fa-brands fa-google"></i>
        </button>
        <button className="social-button facebook">
        <i className="fa-brands fa-facebook-f"></i>
        </button>
      </div>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div></div></div></div>
  );
};

export default LoginForm;
