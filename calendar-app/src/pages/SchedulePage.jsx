// 전체적인 스케줄 페이지가 들어감(Calender.jsx가 이곳에 들어감)
import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import CommonCalendar from '../schedule/CommonCalendar'



const SchedulePage = () => {
  return (
    <>
      <Header />
        <main>      
          <h2>일정관리 Calendar</h2>
          <CommonCalendar />
        </main>
      <Footer />
    </>
  )
}

export default SchedulePage
