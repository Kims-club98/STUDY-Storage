import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React from 'react'
import '../styles/Style.css'


const CalendarPage = ({events, onDateClick, onEventClick}) => {
  return (
    <>
    <div className='calendar'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        contentHeight="auto"
        headerToolbar={{
                  left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        dateClick={onDateClick}
        eventClick={onEventClick}
        selectable={true}
        />
      </div>
    </>
  );
}
export default CalendarPage
