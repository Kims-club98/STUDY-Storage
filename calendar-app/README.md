# Calendar-app 각 기능 설명
```sh
  목차
    1. main.jsx
    2. pages
      2-1. HomePage.jsx
      2-2. SchdulePage.jsx
      2-3. AtCalendarPage
    3. include
      3-1. Header
      3-2. Footer
    4. schedule
      4-1. CommonCalendar
      4-2. ScheduleModal
    5. auth
      5-1. JoinPage.jsx
      5-2. LoginPage.jsx
```

## 1. main.jsx
  - 각 페이지의 내역이 이곳으로 모여서 하나의 웹사이트가 완성됨
  - 이곳에서 최종적으로 index의 root와 연결되어 html에 출력된다.(<div id='root' />에 연결)

  - 각 페이지는 path 를통해 연결되며, 가장 기본값은 '/'이다.

## 2. page

  ### 2-1. HomePage.jsx
  - 캘린더 최초 사이트에 들어올때 출력될 페이지를 의미

  ### 2-2. SchedulePage.jsx
  - 이곳은 일정관리(캘린더) 페이지이며, 실제 일정관리표가 있는 CommonCalendar가 import 되어 있음...

  ### 2-3. AtCalendarPage.jsx
  - 이곳은 근태관리 관련 페이지임


## include: 고정적으로 import 되어 있는 부분

  ### 3-1. Footer.jsx
  - 하단에 고정적으로 출력될 내역

  ### 3-2. Header.jsx
  - 상단에 고정적으로 출력될 내역(NavBar가 작성되어 있음)
  - Link를 통해 웹페이지의 각 위치로 이동시켜 줌

## schedule: 스케줄 표가 있고 실질적인 활동을 하는 구간

  ### 4-1. CommonCalendar.jsx

  ### 4-2. ScheduleModal.jsx 
