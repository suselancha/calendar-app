import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
 
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-message-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import 'moment/locale/es';
import { eventSetActive, eventClearActiveEvent } from '../../actions/events';
moment.locale('es');

const localizer = momentLocalizer(moment);

/*const events = [{
    title: 'Cumpleaños del Jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar la torta',
    user: {
        _id: '123',
        name: 'Alfredo'
    }
}]*/


export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );    

    const onDoubleClick = (e) => {
        //console.log(e);
        //console.log('Abrir Modal');
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        //console.log(e);
        //console.log('Evento Seleccionado');
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        //console.log(e);
        dispatch(eventClearActiveEvent());
    }


    const eventStyleGetter = (event, start, end, isSelected) => {
        //console.log(event, start, end, isSelected);
    
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter= { eventStyleGetter }
                onDoubleClickEvent= { onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot }
                selectable={ true } 
                view= { lastView }
                components= {{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />

            {
                (activeEvent) && <DeleteEventFab />
            }


            <CalendarModal />
        </div>
    )
}
