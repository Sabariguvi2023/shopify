import React,{useState}from "react";
import NavBar from "./Templetes/NavBar";
import Header from "./Templetes/Header";


function App() {
  let [cardValue,setCardValue]= useState(0);
return (
    <>
  <NavBar cardValue={cardValue}/>
    <Header/>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <Card setCardValue={setCardValue}/>
                {/* <div className="col mb-5">
                        <div className="card h-100">
                          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>                                  
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                  {
                                  toggle?<button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(cardValue+1)
                                        setToggle(add=>!add)
                                  }}>
                                    Add to card 
                                  </button>
                                  :
                                  <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(cardValue-1)
                                        setToggle(remove=>!remove)
                                  }}>
                                    Remove the card 
                                  </button>
                                  }
                                  
                                  </div>
                            </div>
                        </div>
                </div>
                <div className="col mb-5">
                        <div className="card h-100">
                          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">                                    
                                    <h5 className="fw-bolder">Toys</h5>                                  
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                  {
                                  toggle?<button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(cardValue+1)
                                        setToggle(add=>!add)
                                  }}>
                                    Add to card 
                                  </button>
                                  :
                                  <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(cardValue-1)
                                        setToggle(remove=>!remove)
                                  }}>
                                    Remove the card 
                                  </button>
                                  }
                                  
                                  </div>
                            </div>
                        </div>
                </div>
                <div className="col mb-5">
                        <div className="card h-100">
                          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">                                    
                                    <h5 className="fw-bolder">Medical Product</h5>                                  
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                  {
                                  toggle?<button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(cardValue+1)
                                        setToggle(add=>!add)
                                  }}>
                                    Add to card 
                                  </button>
                                  :
                                  <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(cardValue-1)
                                        setToggle(remove=>!remove)
                                  }}>
                                    Remove the card 
                                  </button>
                                  }
                                  
                                  </div>
                            </div>
                        </div>
                </div> */}
                </div>
                </div>
    </section>
    
    </>
  );
}

export default App;



function Card({setCardValue}) {
  
  let [toggle,setToggle] = useState(true)
  return (
    <div className="col mb-5">
                        <div className="card h-100">
                          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>                                  
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                  {
                                  toggle?<button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(pluse=>pluse+1)
                                        setToggle(add=>!add)
                                  }}>
                                    Add to card 
                                  </button>
                                  :
                                  <button className="btn btn-outline-dark mt-auto" onClick={() => {
                                        setCardValue(back=>back-1)
                                        setToggle(remove=>!remove)
                                  }}>
                                    Remove the card 
                                  </button>
                                  }
                                  
                                  </div>
                            </div>
                        </div>
                  </div>
                
  )
}

