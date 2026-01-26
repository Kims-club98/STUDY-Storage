import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";
import ScheduleModal from "./ScheduleModal";

const CommonCalendar = () => {
  const [events, setEvents] = useState([
    { id: "1", title: "Meeting", start: "2026-01-22" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSeletedDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 3. 모달 닫기 (중괄호로 묶어 두 상태를 모두 변경)
  const handleClose = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  // 4. 날짜 선택 시 (등록 모드)
  const handleDateSelect = (selectInfo) => {
    setSelectedEvent(null);
    setSeletedDate(selectInfo.startStr);
    setShowModal(true);
    selectInfo.view.calendar.unselect();
  };

  // 6-2. 일정 클릭 시 (수정 모드) - 함수를 밖으로 뺌
  const handleEventClick = (clickInfo) => {
    const event = clickInfo.event;
    setSelectedEvent({
      id: event.id,
      title: event.title,
      startDate: event.startStr,
      endDate: event.endStr || event.startStr,
      category: event.extendedProps.category || 'blue',
      description: event.extendedProps.description || ''
    });
    setShowModal(true);
  };

  // 삭제 함수 - 함수를 밖으로 뺌
  const handleDeleteEvent = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setEvents(events.filter(event => event.id !== id));
      handleClose();
    }
  };

  // 6. 저장/수정 통합 처리
  const handleSaveEvent = (formData) => {
    const eventData = {
      id: formData.id || String(Date.now()),
      title: formData.title,
      start: formData.startDate,
      end: formData.endDate,
      color: formData.category,
      extendedProps: {
        description: formData.description, // 오타 수정: description
        category: formData.category
      }
    };

    if (formData.id) {
      // 수정 모드 (map 사용)
      setEvents(events.map(event => (event.id === formData.id ? eventData : event)));
    } else {
      // 등록 모드
      setEvents([...events, eventData]);
    }

    handleClose();
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        initialView="dayGridMonth"
        locale="ko"
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        eventClick={handleEventClick} // 이제 정상 호출됨
        events={events}
        editable={true}
      />
      
      <ScheduleModal
        show={showModal}
        handleClose={handleClose}
        selectDate={selectedDate}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent} // 삭제 프롭 전달 확인!
        initialData={selectedEvent}  // 수정용 데이터 전달 확인!
      />
    </>
  );
};

export default CommonCalendar;