import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // react bootstrap 가져오기
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SchedulePage from './pages/SchedulePage'
import Homepage from './pages/Homepage'
import AtCalendarPage from './pages/AtCalendarPage'
import JoinPage from './auth/JoinPage'
import LoginPage from './auth/LoginPage'

createRoot(document.getElementById('root')).render( // html의 name root를 랜더링(적용)함
    <>
      <BrowserRouter> {/*< 화면에 대한 라우터 */}
        <Routes>
          {/* ▼ 각 페이지를 하나씩 추가해나감 */}
          <Route path='/' element={<Homepage />} /> {/*< 라우트를 기본값 '/'에 두고, HomePage로 이동 */}
          <Route path='/login' element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path='/schedule' element={<SchedulePage />} />
          <Route path='/atcalendar' element={<AtCalendarPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )


