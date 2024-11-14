
import '../assets/css/Auth.css'; 


const SignUpForm = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="social-login">
        <p>Or sign up with:</p>
        <button className="social-button google">
        <i className="fa-brands fa-google"></i>Google
        </button>
        <button className="social-button facebook">
        <i className="fa-brands fa-facebook-f"></i> Facebook
        </button>
      </div>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div></div></div></div>
  );
};

export default SignUpForm;
