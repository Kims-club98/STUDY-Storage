import React from 'react'
import { useState } from 'react'
import '../styles/Style.css'
;

const HandleBarPage = ({events, setEvents}) => { // event는 클릭이라 이해하기
  const[formData, SetFormData] = useState({
    startDate: '',
    endDate:'',
    title: '',
    color: '3b82f6'
  }) // end of useState -> 입력을 받을 값(주머니)

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    SetFormData({
      ...formData,
      [name]: value
    }); // 입력글 작성 시마다 업데이트

  }
  const handleConfirm = () => { 
    if(!formData.startDate || !formData.endDate || !formData.title){
      alert("날짜와 내용을 모두 입력해주세요")
      return;
    }
  const newSchedule = {
    id: String(Date.now()),
    title: formData.title,
    start: formData.startDate,
    end: formData.endDate,
    color: formData.color
  }; //새로운 일정의 객체를 생성 -> App.jsx의 event에 적용
  

  //  부모로부터 받은 setEvents 이용해 리스트 업데이트
  setEvents([...events, newSchedule]);
  alert("등록이 완료되었습니다.");
  handleReset();
}; // 확인 버튼 클릭 시 실행되는 함수   s

const handleReset =() => { // 이 버튼을 클릭하면 작성한 내용이 사라짐
  SetFormData({
    id: '',
    startDate: '',
    endDate:'',
    title: '',
    color: '#3b82f6'
  })
}
  return (
    <div>
      <h2 className='Htitle'>🎯 일정 등록</h2>
      <p className='description'>내용을 입력 후 확인 버튼을 누르시오</p>
      <div className='form-date' name='날짜선택'>
        <label>시작날짜선택</label>
        <input 
          type="date" 
          name='startDate' 
          value={formData.startDate} 
          onChange={handleInputChange}
          />
      </div>
      <div className='form-date' name='날짜선택'>
        <label>종료날짜선택</label>
        <input 
          type="date" 
          name='endDate' 
          value={formData.endDate} 
          onChange={handleInputChange}
          />
      </div>
      <div className='form-memo' name='메모내용'>
        <label>내용
          <input
          type="text"
          name='title'
          placeholder='일정을 작성하세요!'
          value={formData.title}
          onChange={handleInputChange}
          />
        </label>
      </div>
      <div className='form-color' nam="색깔선택">
        <label>업무그룹선택
          <select name="color" value={formData.color} onChange={handleInputChange}>
            <option value="#3b82f6">🟦파랑 (업무)</option>
            <option value="#ef4444">🟥빨강 (중요)</option>
            <option value="#10b981">🟩초록 (개인)</option>
            <option value="#f59e0b">🟨노랑 (기타)</option>
          </select>
        </label>
      </div>
      <div className='btn-group'>
      <button className='confirm-btn' name='확인버튼' onClick={handleConfirm}>등록하기</button>
      <button className='reset-btn' name='초기화' onClick={handleReset}>초기화하기</button>
      </div>
      <hr />
      <h2 className='Htitle'>🎯 일정 수정</h2>
      <p className='description'>일정을 클릭하시면 내역이 들어옵니다!</p>
    </div>
  )
};
export default HandleBarPage
