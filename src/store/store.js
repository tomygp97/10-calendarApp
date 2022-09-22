import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice"; //! no me deja importar de ./


export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})