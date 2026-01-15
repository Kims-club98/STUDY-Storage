import { BrowserRouter ,Route, Routes } from "react-router-dom"
import CalendarPage from "./pages/CalendarPage"
import HandleBarPage from "./pages/HandleBarPage"
import Header from "./include/Header"
import Footer from "./include/Footer"
import "./styles/Style.css"
import React, { useState } from "react"

function App () {
  const [events, setEvents] = useState([  
      {id: "1",// 반드시 유니크
    title: "회의",
    start: "2026-01-24",
    end: "2026-01-25",
    memo: "줌 링크...",
    color: "#3b82f6"} ])
  return (
<div className="app-container">
      {/* 1. Header는 모든 페이지에서 공통으로 보이도록 Routes 밖에 배치 */}
      <Header />
      <main className="content-area">
        <div className="input-area">
          {/* 2-1. 좌측: 입력폼 핸들바 */}
          <HandleBarPage events={events} setEvent={setEvents} />
        </div>
        {/* 2-2. 메인 경로에서 CalendarPage를 보여줌 */} 
        <div className="calendar-wrapper"> 
          <Routes>
            {/* setEvents를 전달해야 나중에 일정 추가가 가능합니다. */}
            <Route path="/" element={<CalendarPage events={events} setEvents={setEvents} />} />
          </Routes>
        </div>
      </main>
      {/* 4. Footer 영역 */}
      <Footer />
    </div>
  );
}
export default App
