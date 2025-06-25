const SignUp = () => {
     return (
          <>
               <div className="card p-1" style={{ width: '18rem', height: '100%' }}>
               <form className="p-2">

                    <h1 className="d-flex justify-content-center mt-1 mb-1 fs-2">Instagram</h1>
                    {/* email */}
                    <div className="mb-1">
                    <label htmlFor="exampleInputEmail1" className="form-label small">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email' />               
                    </div>
                    {/* Name */}
                    <div className="mb-1">
                    <label htmlFor="name" className="form-label small">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder='Full Name' />               
                    </div>
                    {/* Phone Number */}
                    <div className="mb-1">
                    <label htmlFor="phone" className="form-label small">Email address</label>
                    <input type="number" className="form-control" id="phone" placeholder='Email' />               
                    </div>
                    {/* Password */}
                    <div className="mb-1">
                    <label htmlFor="exampleInputPassword1" className="form-label small">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    {/* SignUp button*/}
                    <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary mb-1 w-100">Sign Up</button>
                    </div>
                    {/* change to login*/}
                    <div className='d-flex justify-content-center d-grid'>
                    <p>have an Account? <a href="">LogIn</a></p>
                    </div>
               </form>
               </div>
          </>
     )
};

export default SignUp;