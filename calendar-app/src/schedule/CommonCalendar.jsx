// FullCalendar 라이브러리가 들어가는 페이지(SchedulePage.jsx속에 들어감)

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 보기
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간, 일간 뷰 지원
import interactionPlugin from "@fullcalendar/interaction"; // 클릭 이벤트
import React, { useState } from "react";
import ScheduleModal from "./ScheduleModal";

const CommonCalendar = () => {
  // 1. 이벤트 리스트(DB에서 가져온 데이터의 형태)
  const [events,setEvents] = useState([
    {"title":"Meeting","start":"2026-01-22"}
  ]);

  // 2. 모달제어상태
  const [showModal, setShowModal] = useState(false) // 디폴트값이 안보이게 함
  const [selectedDate, setSeletedDate] = useState('')

  //3. 모달 닫기 함수
  const handleClose = () => setShowModal(false)
  
  //4. 날짜 선택 시 실행되기(팝업 열기 함수)= 
  const handleDateSelect = (selectInfo) => {
    console.log(
      `▼ handleDateSelect 작동 ▼
      selectInfo.startStr(시작하는 시간): ${selectInfo.startStr}, 
      selectInfo.endStr(끝나는 시간): ${selectInfo.endStr} `
    )
    setSeletedDate(selectInfo.startStr) // 선택된 날짜를 저장한다
    setShowModal(true) // 선택된 모달 열기
  

  // 5. 캘린더 드래그 선택 영역 해제
  let calendarAPi = selectInfo.view.calendar;
  calendarAPi.unselect(); // 모달 표시
  } // end of handleDateSelect (선택 시 발생하는 이벤트)

  // 6.모달에서 등록하기 눌렀을 경우 -> 실행되는 함수
  const handleSaveEvent = (formDate) => {
    // 새로운 이벤트 생성
    const newEvent = {
      title: formDate.title,
      start: formDate.startDate,
      end: formDate.endDate,
      color:
      // 분류 별 생삭을 지정하게 된다.... 
        formDate.category,
      extendedProps: {
        description: formDate.destripion,
        category: formDate.category
      }
    }

  // 7. 기존 이벤트 배열에 추가하기(실제 axios.post가 들어가 DB 저장로직이 들어감)
  setEvents([...events,newEvent])
// 8. 모달 닫기
    handleClose(); 
  }
  return (
    <>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]} // 플러그인 설정
        headerToolbar={{
          left: "prev,next today", // 이전달, 다음달, 오늘달
          center: "title", // 현재 날짜 제목
          right: "dayGridMonth,timeGridWeek", // 월별, 주별 뷰
        }}
        initialView="dayGridMonth" // 기본 화면 설정
        locale="ko"// 한국어 설정 목적
        editable={true} // 수정 가능 여부
        selectable={true} // 선택 가능 여부
        selectMirror={true} // TimeGrid 뷰에서 자리 표시자 여부
        dayMaxEvents={true} // 한 셀에 최대 이벤트 표시 여부
        select={handleDateSelect} // 날짜 선택 시 기능 추가
        events={events} // ✅ 일정 목록 추가 (json 포멧으로 -db에서 가져오는 정보이다.)"DB에서 가져온다 => 객체 배열이다 [{},{},{}] 형태..." 

      />
        {/* FullCalendar 모달과 ScheduleModal은 서로 분리되어야 한다!!! */}
        <ScheduleModal
        show={showModal}
        handleClose={handleClose}
        selectDate={selectedDate}
        onSave={handleSaveEvent}
        />
    </>
  );
};

export default CommonCalendar;
