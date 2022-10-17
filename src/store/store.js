import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { calendarSlice } from "./calendar/calendarSlice";
import { uiSlice } from "./ui/uiSlice"; //! no me deja importar de ./
// import { calendarSlice, uiSlice, authSlice } from "./";



export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({ //! para controlar el error del serilizable check (hora)
        serializableCheck: false
    })
})