// 전체적인 스케줄 페이지가 들어감(Calender.jsx가 이곳에 들어감)
import React from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import CommonCalendar from '../schedule/CommonCalendar'


<<<<<<< HEAD

=======
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
const SchedulePage = () => {
  return (
    <>
      <Header />
<<<<<<< HEAD
        <main>      
          <h2>일정관리 Calendar</h2>
          <CommonCalendar />
        </main>
=======
      <main className='bg-light'>      
        {/* 복잡한 font 태그를 지우고 아래와 같이 수정하세요 */}
        <h2 style={{textAlign: 'center', fontWeight: '800', fontSize: '3rm'}}>일정관리 Calendar</h2>
        <CommonCalendar />
      </main>
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
      <Footer />
    </>
  )
}

export default SchedulePage
