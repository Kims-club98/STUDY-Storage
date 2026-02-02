// 전체적인 스케줄 페이지가 들어감(Calender.jsx가 이곳에 들어감)
import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import CommonCalendar from '../schedule/CommonCalendar'


const SchedulePage = () => {
  return (
    <>
      <Header />
      <main className='bg-light'>      
        {/* 복잡한 font 태그를 지우고 아래와 같이 수정하세요 */}
        <h2 style={{textAlign: 'center', fontWeight: '800', fontSize: '3rm'}}>일정관리 Calendar</h2>
        <CommonCalendar />
      </main>
      <Footer />
    </>
  )
}

export default SchedulePage
