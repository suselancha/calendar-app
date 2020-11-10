import { types } from '../types/types';
import moment from 'moment';

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Cumpleaños del Jefe',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar la torta',
        user: {
            _id: '123',
            name: 'Alfredo'
        }
    }],
    activeEvent: null
};


export const calendarReducer = ( state =  initialState, action) => {

    switch ( action.type ) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload //Devuelve el nuevo evento
                ]
            }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e //Devuelve el evento modificado, sino el evento asi como esta
                )
            }

        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                ),
                activeEvent: null
            }

        default:
            return state;

    }

}