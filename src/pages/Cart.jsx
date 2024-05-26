import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../redux/cartSlice'
import { Link, useNavigate } from 'react-router-dom'



const Cart = () => {
  const ourCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal]=useState(0)
  const dispatch = useDispatch()
  const navigate =useNavigate()
  useEffect(()=>{
  if(ourCart?.length>0){
  setCartTotal(ourCart?.map(item=>item.totalPrice)
.reduce((t1,t2)=>t1+t2))
  }else{
  setCartTotal(0)
  }
  },[ourCart])
  const handleDecrement = (product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  const checkout = ()=>{
    dispatch(emptyCart())
    alert("order placed succesfully!!")
    Navigate('/')
  }

  return (
    <>
      <Header/>
      <div className='container' style={{marginTop:'150px'}}>
        {
          ourCart?.length>0 ?
          <div className="cart">
          <h1>Cart Summary</h1>
          <div className="row mt-4">
            <div className="col-lg-8">
              <table className="table shadow">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    ourCart?.map((product,index)=>(
                    <tr key={product?.id}>
                    <td>{index+1}</td>
                    <td>{product?.title.slice(0,20)}...</td>
                    <td><img width={'50px'} src={product?.thumbnail} alt="" /></td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=>handleDecrement(product)} style={{color:'red'}} className='btn fw-bolder'>-</button>
                        <input value={product?.quantity} style={{width:'50px'}} className='fw-bolder me-1 ms-1' type="text" readOnly />
                        <button onClick={()=>dispatch(incQuantity(product?.id))} style={{color:'red'}} className='btn fw-bolder'>+ </button>
                      </div>
                    </td>
                    <td>$ {product?.totalPrice}</td>
                    <td>
                      <button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn'> <i className='fa-solid fa-trash text-danger'> </i> </button>
                    </td>
                  </tr>
                    ))
                  }
                  
                </tbody>
              </table>
              <div className="float-end">
                <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-2'>EMPTY CART</button>
                <Link to={'/'} className='btn btn-primary'> SHOP MORE</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border rounded p-3">
                <h4>Total Amount : <span className='text-danger'>${cartTotal}</span> </h4>
                <div className='d-grid'>
                  <button onClick={checkout} className='btn btn-success'>Checkout</button>

                </div>

              </div>
            </div>
          </div>
        </div>
        :
        <div style={{height:'60vh'}} className="d-flex justify-content-center align-items-center flex-column">
        <img height={'400px'} src="https://assets.materialup.com/uploads/38936b35-9823-47e1-98cc-fb8b5c1d962e/preview.jpg" alt="" />
        <h3>Your Wishlist is Empty!!!</h3>
      </div>
        }
      </div>
    </>
  )
}

export default Cart





// import React from 'react'
// import Header from '../components/Header'
// import { useSelector } from 'react-redux'


// const Cart = () => {
//   const ourCart = useSelector(state=>state.cartReducer)
//   return (
//     <>
//         <Header/>
//         <div  style={{marginTop:'150px'}}

//         className='container'>
          
            
//           <div className='cart'>
//             <h1>Cart Summary</h1>
//             <div className='row mt-4'>
//               <div className='col-lg-8'>
//               <table className="table shadow">
//                 <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Image</th>
//                   <th>Quantity</th>
//                   <th>Price</th>
//                   <th>...</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                   <td>1</td>
//                   <td>Pixel 8a</td>
//                   <td><img width={'50px'} height={'50px'} src="https://www.cnet.com/a/img/resize/0ce8ecc189733124adf6574b330449decebc7e73/hub/2023/10/11/c2206783-dffa-4936-814d-9a2f816d2817/google-pixel-8-pro-review-cnet-8.jpg?auto=webp&fit=crop&height=675&width=1200" alt="product image" /></td>
//                   <td>
//                     <div className='d-flex'>
//                       <button className='btn btn-danger fw-bolder'>-</button>
//                       <input value={10} style={{width:'50px'}} className='fw-bolder me-1 ms-1' type="text" readOnly />
//                       <button className='btn btn-danger fw-bolder'>+</button>
//                     </div>
//                   </td>
//                   <td>$ 450</td>
//                   <td> <button className='btn'> <i className='fa-solid fa-trash text-danger'></i></button></td>
//                 </tbody>
//               </table>
//               </div>
//               <div className='col-lg-4'></div>
//             </div>
//           </div>
          

//         </div>
        
//     </>
//   )
// }

// export default Cart




