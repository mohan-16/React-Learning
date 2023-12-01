export default function ProductPrice ({rate,discount,offer,bank}) {
    return(
     <>  <div>
           <h4>{rate}</h4> 
        </div>
        <div>
        <spam className="text-decoration-line-through fw-light"> <small>{discount}</small></spam>
        <spam className="text-success">{offer}</spam>
        </div>
        <div className="text-success  m-1 p-1">
          <h6>{bank}</h6>
        </div>
        </> 
    )
}

ProductPrice .defaultProps={
    rate:"₹40,999",
    discount:"₹49,999",
    offer:"17% Off",
    bank:"Bank offer"
}