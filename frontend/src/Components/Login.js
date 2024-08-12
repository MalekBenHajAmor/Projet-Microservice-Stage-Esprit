import React from 'react';

function Login() {
  return (
    <div id="contact" className="text-center">
     
      <div className="container">
        <div className="section-title text-center">
          <h3>Sign Up Page</h3>
        </div>
        <div className="col-md-6 col-md-offset-3 ">
  <form name="sentMessage" id="contactForm" noValidate>
    <div className="form-group">
      <input type="text" id="name" className="form-control" placeholder="Username" required="required" />
      <p className="help-block text-danger"></p>
    </div>
    <div className="form-group">
      <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
      <p className="help-block text-danger"></p>
    </div>
    <div className="form-group">
      <input type="password" name="password" id="password" className="form-control" placeholder="Password" required />
      <p className="help-block text-danger"></p>
    </div>
    <div id="success"></div>
    <button type="submit" className="btn btn-custom btn-lg">Sign up</button>
  </form>
</div>

      </div>
    </div>
  );
}

export default Login;
