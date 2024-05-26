import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/productSlice';

const Header = ({insideHome}) => {
const dispatch = useDispatch()
const yourWishlist = useSelector(state=>state.wishlistReducer)
const yourCart = useSelector(state=>state.cartReducer)

  return (
    <>
     <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand><Link to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-truck-fast me-2"></i>FF store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {insideHome &&
              <Nav.Link>
               <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'500px'}} type='text' className="rounded p-1" placeholder='Search Products Here!!!'/>
               </Nav.Link>}
             <Nav.Link> <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/Wishlist'}> <i className="fa-solid fa-heart text-danger me-2"></i>Wishlist<Badge className='ms-2'>{yourWishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link> <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/Cart'}> <i className="fa-solid fa-cart-plus text-success me-2"></i>Cart<Badge className='ms-2'>{yourCart?.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
   </>
  )
}

export default Header









// import React from 'react'
// import { Container,Navbar,Nav, Badge } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { searchProduct } from '../redux/productSlice'


// const Header = ({insideHome}) => {
//   const dispatch = useDispatch()
//   const yourWishlist = useSelector(state=>state.wishlistReducer)
//   const yourCart = useSelector(state=>state.cartReducer)



//   return (
//     <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{zIndex:'10'}}>
//       <Container>
//         <Navbar.Brand> <Link className='fw-bolder' to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-truck-fast"></i>  E-STORE </Link> </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             {insideHome &&
//                 <Nav.Link >
//                 <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'500px'}} type='text' className="rounded p-1" placeholder='Search Products Here....'/>
//             </Nav.Link>}
//             <Nav.Link >
//             <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/Wishlist'}> <i className="fa-solid fa-heart text-danger me-2"></i>Wishlist<Badge className='ms-2'>{yourWishlist?.length}</Badge></Link>
//             </Nav.Link>

//             <Nav.Link >
//             <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/Cart'}> <i className="fa-solid fa-cart-plus text-success me-2"></i>Cart<Badge className='ms-2'>{yourCart?.length}</Badge></Link>
//             </Nav.Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default Header



