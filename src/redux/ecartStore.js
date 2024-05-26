import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

const ecartStore = configureStore({
    reducer:{
       productReducer:productSlice,
       wishlistReducer:wishlistSlice,
       cartReducer:cartSlice
    }
})

export default ecartStore





// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";
// import wishlistSlice from "./wishlistSlice";
// import cartSlice from "./cartSlice";



// const ecartStore = configureStore({
//     reducer:{
//         productReducer:productSlice,
//         wishlistReducer:wishlistSlice,
//         cartReducer : cartSlice

//     }
// })

// export default ecartStore