import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from "react";
import ScheduleModal from "./ScheduleModal";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const CommonCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 1. Firebase 데이터 불러오기
  useEffect(() => {
    const fetchEventsData = async () => {
      // 오타 수정: QuerySnapshot -> querySnapshot (소문자 권장)
      const querySnapshot = await getDocs(collection(db, "schedules"));
      const fetchedEvents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(fetchedEvents);
    };
    fetchEventsData();
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  // 2. 날짜 선택 시 (등록 모드)
  const handleDateSelect = (selectInfo) => {
    // 주의: 여기서 deleteDoc을 하면 날짜를 클릭하자마자 데이터가 지워집니다! 
    // 여기는 빈 모달을 띄우는 곳입니다.
    setSelectedEvent(null);
    setSelectedDate(selectInfo.startStr);
    setShowModal(true);
    selectInfo.view.calendar.unselect();
  };

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

  // 3. 삭제 함수 (Firebase 연동)
  const handleDeleteEvent = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await deleteDoc(doc(db, "schedules", id)); //
        setEvents(events.filter(event => event.id !== id));
        handleClose();
      } catch (error) {
        console.error("삭제 실패:", error);
      }
    }
  };

  // 4. 저장/수정 통합 처리
  const handleSaveEvent = async (formData) => {
    const eventData = {
      title: formData.title,
      start: formData.startDate,
      end: formData.endDate,
      color: formData.category,
      extendedProps: {
        description: formData.description,
        category: formData.category
      }
    };

    try {
      if (formData.id) {
        // [수정 모드]
        const eventRef = doc(db, "schedules", formData.id);
        await updateDoc(eventRef, eventData);
        setEvents(events.map(event => (event.id === formData.id ? { id: formData.id, ...eventData } : event)));
      } else {
        // [등록 모드]
        const docRef = await addDoc(collection(db, "schedules"), eventData);
        setEvents([...events, { id: docRef.id, ...eventData }]);
      }
      handleClose();
    } catch (error) {
      console.error("Firebase 에러 >>", error);
      alert("저장 실패!");
    }
  }; // 함수가 여기서 정확히 닫혀야 합니다.

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
        eventClick={handleEventClick}
        events={events}
        editable={true}
      />
      
      <ScheduleModal
        show={showModal}
        handleClose={handleClose}
        selectDate={selectedDate}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
        initialData={selectedEvent}
      />
    </>
  );
};

export default CommonCalendar;