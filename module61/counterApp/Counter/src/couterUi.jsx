const CouterUi = ({ count, setCount }) => {
     return (
          <>
               <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                    <h1 className="d-flex justify-content-center" >Couter</h1>
                    <h1 className="d-flex justify-content-center">{count}</h1>

                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                    <button className="btn btn-primary me-2"  onClick={() => setCount(count - 1)}>Decrement</button>
                    <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
                    </div>

                    </div>

               </div>
          </>
     )
}

export default CouterUi;