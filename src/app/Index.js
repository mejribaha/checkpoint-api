import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./taskSlice"

export default configureStore({
    reducer: {
        person:personReducer
    }
})