import React,{useEffect,useState} from 'react';

const Fetchme = () =>{

 const [users, setUsers] = useState([]);
const getUsers = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
     setUsers(await response.json());

}
useEffect(() => {
    getUsers();
});

return(
    <>
     <div className="container">
     <h2 className="text-center">We Sell</h2>
                <div className="row">                      
                {
                    users.map((curElem) => {
                            return(
                                <div className="col-md-4">
                                    <div className="card card-product">
                                        <div className="product-img-parent"><img src={curElem.image} className="card-img-top product-image" alt={curElem.title}></img></div>
                                        
                                        {/* <div>{curElem.id}</div>
                                        <img src={curElem.image} height="75px"/>
                                        <div>{curElem.title}</div>
                                        <div>{curElem.category}</div>
                                        <div>{curElem.description}</div>
                                        <div>{curElem.price}</div>
                                        <div>{curElem.rating.rate}</div>
                                        <div>{curElem.rating.count}</div> */}
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{curElem.title}</h5>
                                            <p className="card-text">{curElem.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    })
                }
       </div>
        </div>
    </>
)
}

export default Fetchme