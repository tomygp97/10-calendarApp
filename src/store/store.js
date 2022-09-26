import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/calendarSlice";
import { uiSlice } from "./ui/uiSlice"; //! no me deja importar de ./
// import { calendarSlice } from "./";



export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({ //! para controlar el error del serilizable check (hora)
        serializableCheck: false
    })
})