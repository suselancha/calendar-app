import { types } from '../types/types';
import moment from 'moment';

const initialState = {
    events: [{
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
                    action.payload
                ]
            }

        default:
            return state;

    }

}