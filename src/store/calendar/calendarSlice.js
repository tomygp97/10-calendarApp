import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns'; // yarn add date-fns


const tempEvent = {
    
        _id: new Date().getTime(),
        title: "Cumpleaños del jefe",
        notes: "Hay que comprar el pastel",
        start: new Date(),
        end: addHours( new Date(), 2 ),
        bgColor: "#fafafa",
        user: {
          _id: "123",
          name: "Tomas"
        }
      
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: ( state, { payload } ) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: ( state, { payload } ) => {
            state.events.push( payload );
            state.activeEvent = null;
        },
        onUpdateEvent: ( state, { payload } ) => { //! clase 360 para revisar luego
            state.events = state.events.map( event => {
                if( event._id === payload._id ) {
                    return payload;
                }

                return event;
            });
        },
        onDeleteEvent: ( state ) => {
            // Regreso todos los eventos cuyo id es diferente al de la nota activa (lo elimino)
            if( state.activeEvent ) {
                state.events = state.events.filter( event => event._id !== state.activeEvent._id );
                state.activeEvent = null;
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;