const Login = ({ switchView }) => {
  return (
    <>
      <div className="card p-1" style={{ width: '18rem', height: '100%'  }}>
          <form className='p-3'>

               <h1 className="d-flex justify-content-center mt-1 mb-1">Instagram</h1>
               {/* Email */}
               <div className="mb-1">
               <label htmlFor="email" className="form-label">Email address</label>
               <input type="text" className="form-control" id="email" placeholder='Phone number, username or Email' />
               {/* Password */}
               </div>
               <div className="mb-1">
               <label htmlFor="password" className="form-label">Password</label>
               <input type="password" className="form-control" id="password" placeholder='Password' />
               </div>
               {/* Sign Up button */}
               <div className='d-flex justify-content-center d-grid gap-2'>
               <button type="submit" className="btn btn-primary mb-1 w-100">Sign In</button>
               </div>
               {/* Change to signup */}
               <div className='d-flex justify-content-center d-grid'>
                    <p>Don't have Account? <a href="#" onClick={switchView}>Sign Up</a></p>
               </div>
        </form>
      </div>
    </>
  );
};

export default Login;
