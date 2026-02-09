<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
    - 캘린더의 총괄 관리의 역할을 수행함
    - 달력의 위치, 데이터관리, 클릭 시 수행할 행동에 대한 지시을 수행함
  #### useState (상태관리자)
    기능: 값이 변할 때 -> 화면도 같이 변해야 하는 데이터 저장 시 사용
```js
const [events, setEvents] = useState([])
// events: 현재 데이터(읽기 전용)
// setEvents: 데이터를 바꾸는 함수(events 가 setEvent로 바뀔 경우 웹페이지를 업데이트 함)
```

  #### useEffect
    - 최초 1회(컴포넌트가 화면에 나타날 때) Firebase에 데이터를 가지고 오는 역하을 수행함
    - 리액트 컴포넌트 화면이 나타나고 사라질 때 -> 나중 작업도 같이 수행해 달라는 부수효과(Side Effect) 처리장치임.
    - useEffect 의 코드에 따른 랜더링
```js
// 1. 매 렌더링마다 실행 (거의 사용 안 함)
  useEffect(() => {
    console.log("화면이 다시 그려질 때마다 제가 실행됩니다.");
  });

  // 2. 화면에 처음 나타날 때만 실행 (API 호출 등에 주로 사용) ==> 사용 다 []
  useEffect(() => {
    console.log("반갑습니다! 페이지가 처음 로드되었습니다.");
    
    // 4. Cleanup: 컴포넌트가 사라지기 직전에 실행 (뒷정리)
    return () => {
      console.log("안녕히 계세요! 페이지를 떠납니다.");
    };
  }, []); // 빈 배열이 핵심! (사용 다)

  // 3. 특정 값(count)이 변경될 때만 실행
  useEffect(() => {
    console.log(`현재 클릭 횟수는 ${count}회입니다. 데이터 업데이트 완료!`);
  }, [count]); // count가 변할 때만 감지
```
  - firebase의 db에 있는 데이터를 가지고 옴(await -> 지연이 있으므로 대기함)
  - 데이터 뭉치 querySnapsho.docs에서 새로운 규칙으로 재구성(.map)함
    id: doc.id(Firebase의 id를 가지고 올때 생성해줌)
    ...doc.data() 함수 실행하여 실제 내용을 출력
    ... => 내용물들을 펼쳐놓으라는 것을 의미함.
  
  ※ 필요한 이유: Firebase에 가지고 온 메타데이터는 필요없는 정보가 많음, 그래서 우리가 필요한 정보만 가지고 리스트로 만들어줄 필요가 있음.
  #### 뒤정리 함수 handleClose(정리 함수)
    모달(팝업창)을 닫을 때 실행됨
    setShowModal(false) -> 창을 닫음
    setSelectEvent(null) -> 이전 선택한 이벤트를 지움
  
  #### handleDateSelect(날짜 선택 시 등록모드)
   - 특정 데이터를 삭제, 특정 데이터를 즉시 반영하는 함수
   window.confirm(""): 을 통해 삭제 여부를 확인
   ```jsx
   try{
   await deleteDocs(doc(db,"schedules", id));
   // firebase의 db의 실제 schedules의 id를 삭제
   setEvents(events.filter(event => event.id !== id));
   // 현재 표시된 리스트(==events)에서 삭제된 ID만 제외, 다시 저장함
   // -> id가 일치하지 않는 것들만 남기는 필터링 규칙
   handleclose() // 모달or팝업창을 닫는 것을 의미함.
   }
   ```
   ```jsx
  catch(error){
    console.error("삭제실패",error)
    // 서버장애 등 삭제 실패 시 -> 애러 내용을 출력하는 함수(try-catch 구성)
  }
   ```
  + async/await: 데이터 지우는 시간의 지연으로 인해, 삭제 등(명령 수행 완료 까지) 넘어가지 않고 기다리도록 요청하는 것.
  + deleteDoc: Firebase에서 제공하는 문서삭제용 도구
  + filter: JS의 기능으로, 특정 조건에 맞는 데이터만 골라내줌(리스트만들거나, 지우거나 등 가능)

  #### handleSaveEvent(저장/수정을 통합해서 처리함)
   - Database를 저장 전 컴퓨터가 이해하기 쉽게 포장하는 단계
    1. formData: 현재 날 것의 데이터
    2. eventData: db나 프로그램이 읽을 수 있도록 정리된 상태
    3. extendedProps: 기본 정보 외의 내역을 담아둔 주머니
    결론: evnetData는 formdata의 title을 title로 이름을 지어두는 규격에 맞게 넣어주는 것으로 이해하면 된다.
    날것의 formData를 -> eventData의 title,start...등으로 포장하는 작업

  >> try-catch 수정등록모드 지정 if(formData.id)는 현재 ID가 있는지 여부를 물어보는 것 -> 있으면 수정 else(없으면) -> 신규
  - eventRef는 doc(db, "schdule",formData.id)로 db의 "schedule" 테이블에 formData.id를 찾는 것을 eventRef로 선언함
  - await updateDoc(eventRef, eventData): 새로운 데이터(eventData)로 덮어 씌움을 의미
   -> eventRef를 eventData로 변경
  - setEvents(events.map(event=>...)): 은 수정된 데이터로 교체하고, 나머지는 그대로 둠

   - 등록모드(else 이후)
   - const docRef = await addDoc(collection(db, "schedules"), eventData) : Firebase가 새로운 일정을 등록하였고, 이 일정의 Id는 docRef.id로 출려해줌
   - setEvents([...events, {id: docRef.id, ...eventData}]): 기존 리스트(...events) 뒤에 새로운 data와 받은 ID를 합쳐서 붙여줌

  - handleClose(): 창/모달을 종료함

  - 에러의 경우 }catch(error){}
    - 에러를 출력하고, 저장 실패라는 문구로 알린다.

  #### return 이후 jsx(FullCalendar 실제 조립)
    - plugins(기능팩): 일별, 주별보기 등...
    - headerToolbar: 달력 상단의 버튼을 의미
    - 연결된 스위치
      seelctable, selectMirror 등등등...
  #### SchduleModal: 모달창에서의 실제 조합
    - show: 팝업창을 보여줄 것인가?
    - handleClose: X 버튼을 누르면 닫힘
    - onSave: 저장 버튼을 누를 경우 -> 함수 연결(작동)
    - onDelete: 삭제 버튼을 누를 경우 -> 함수 연결(작동)
    - initalData: 수정 시 기존 내용을 채워 둠
    
  ### 4-2. ScheduleModal.jsx 
  - FullCalendar에서 클릭 시 생기는 모달창을 관리하는 페이지

  #### 매개변수
  ```jsx
  const ScheduleModal = ({show, handleClose, selectDate, onSave, onDelete, initialData}) => {
  ```
    - 여기에서 오는 매개변수들은 부모인 CommonCalendar가 자손인 SchduleModal을 불러오기 위한(==랜더링) 것들이며 예를 들어 CommonCalendar에서 show 를 클릭 시 ScheduleModal의 ShowModal을 불러오게 된다.
  
  #### const [formData, setFormData] = useState (상태관리)
    - 이벤트 발생 시 (-> 데이터가 변경) 화면을 다시 그리는 것을 의미한다.
    - 작동원리
      1. 초기: formData >> 초기 설정값으로 빈칸이다.
      2. Event 발생 -> 사용자의 배경화면 변경 button 클릭 & 이름 입력
      3. 변경 명령(setFormDate): 사용자에게 새로운 값으로의 변경을 요청
      4. 화면 갱신(Re-render): 변경된 값을 확인하고 변경된 값을 눈앞에 보여준다.
    + 객체( { } ) 사용 시 주의사항
      - 기존 객체 수정이 아닌 -> 새로운 객체로 바꿔야 함(전개연산자 사용 필요)

  #### UseEffect(() => {...},[show, initialData, selectDate])
    - UseEffect는 React 모달(창)이 열릴 때 데이터 세팅 *어떻게 세팅될 지 결정*해주는 Logic임
    
    if(show)
    : if(initialData) 만약 기존 데이터이면 된다면
    -> 기존의 내역을 불러오고 세팅을 한다(setFormData)

    else : 그 외(데이터가 없는 경우)는 다음과 같이 세팅을 한다(등록모드)

    - 맨 뒤의 [show, initalData, selectDate]는 실제로 input 받는 매개변수를 의미함

    cf) 개념 => 와 = 의 차이점

    = (변수를 저장한다)
    ```js
    let title = '공부하기'; // title의 상자에 '공부하기'를 담았다
    ```

    => (행동레시피: 명령이다 -조건 만족 시 -수행)
    ```js
    const sayHello = () => {console.log("안녕");};
    // ()는 실행 sayHello를 실행하면 "안녕"을 출력한다로 이해하면 된다./
    ```
    결론: useEffect(()=>{...}) 는 "상황이 변화하면 동작을 수행해라" 라는 의미이다.
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
