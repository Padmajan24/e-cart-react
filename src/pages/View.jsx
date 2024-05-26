import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { addToWishList } from '../redux/wishlistSlice'



const View = () => {
  const [product,setProduct] = useState({})
  const {id} = useParams()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const yourCart = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  console.log(userWishlist);

  useEffect(()=>{
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  
  const handleWishlist =()=>{
    if(userWishlist?.includes(product)){
      alert("item already in your wishlist !!!")
    }else{
      dispatch(addToWishList(product))
    }
  }

  const handleCart = ()=>{
    const existingProduct = yourCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("Existing Product quantity is Incrementing!!!")
    }else{
      dispatch(addToCart(product))
    }
  }
  return (
   <>
      <Header/>
          <div style={{marginTop:'150px',height:'70vh'}} className="container d-flex align-items-center">
            <div className="row align-items-center mb-5 w-100">
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <img className='w-100' height={'400vh'} src={product?.thumbnail} alt="product-img" />
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-6">
                <h5>PID: {product?.id}</h5>
                <h1>{product?.title}</h1>
                <h3 className='fw-bolder text-danger'>$ {product?.price}</h3>
                <p><span className='fw-bolder'>Description : </span> {product?.description}</p>
                <div className="d-flex justify-content-between mt-3">
                  <button onClick={handleWishlist} className="btn btn-outline-dark"><i className="fa-solid fa-heart text-danger me-2"></i>Add To Wishlist</button>
                  <button onClick={handleCart} className="btn btn-outline-dark"><i className="fa-solid fa-cart-plus text-success me-2"></i>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
   </>
  
  )
}

export default View









// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToWishList,addToCart } from '../redux/wishlistSlice';



// export const View = () => {
//   const [product,setProduct] = useState({})
//   const {id} = useParams()
//   const userWishlist = useSelector(state=>state.wishlistReducer)
//   const userCart = userSelector(state=>state.cartReducer)
//   const dispatch = useDispatch()
//   // console.log(userWishlist);
 
  

//   useEffect(()=>{
//     if(localStorage.getItem("allProducts")){
//       const allProducts = JSON.parse(localStorage.getItem("allProducts"))
//       setProduct(allProducts.find(item=>item.id==id))
//     }
//   },[])

//   const handleWishlist = () =>{
//     if(userWishlist?.includes(product)){
//       alert('item already in your wishlist !!!')
//     }else{
//       dispatch(addToWishList(product))
//     }
//   }

//   const handleCart = ()=>{
//     const existingProduct = userCart?.find(item=>item.id==product.id)
//     if(existingProduct){
//       dispatch(addToCart(product))
//       alert('Existing Product quantity is Incrementing !!')

//     }else{
//       dispatch(addToCart(product))
//     }
//   }

//   return (
//     <>
//       <Header/>
//       <div style={{marginTop:'150px',height:'70vh'}} className='container d-flex align-items-center'>
//         <div className='row align-items-center mt-5'>
//             <div className='col-lg-1'></div>
//             <div className='col-lg-4'>
//                 <img style={{height:'300px'}} className='w-100' src={product?.thumbnail} alt="pixel image" />
//             </div>
//             <div className='col-lg-1'></div>
//             <div className='col-lg-6'>
//                 <h4>prd id :{product?.id} </h4>
//                 <h1>{product?.title} </h1>
//                 <h3 className='fw-bolder text-danger'> ${product?.price} </h3>
//                 <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description :</span>{product?.description} </p>
//                 <div className='d-flex justify-content-between mt-3'>
//                     <button onClick={handleWishlist} className='btn btn-outline-dark'> <i className='fa-solid fa-heart text-danger'></i> Add to Wishlist
//                     </button>
//                     <button onClick={handleCart} className='btn btn-outline-dark' > <i className='fa-solid fa-cart-plus text-success'></i>Add to Cart</button>
//                 </div>

//             </div>
//         </div>
//       </div>
       
//     </>
//   )
// }
// export default View
