import React from 'react'
import { useState } from 'react'
import '../styles/Style.css'

const HandleBarPage = ({events, setEvents}) => { // event는 클릭이라 이해하기
  const[formData, SetFormData] = useState({
    date: '',
    title: '',
    color: '#3b82f6'
  }) // end of useState -> 입력을 받을 값(주머니)

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    SetFormData({
      ...formData,
      [name]: value
    }); // 입력글 작성 시마다 업데이트

  }
  const handleConfirm = () => { 
    if(!formData.date || !formData.title){
      alert("날짜와 내용을 모두 입력해주세요")
    }
  const newSchedule = {
    id: String(Date.now()),
    title: formData.title,
    start: formData.date,
    color: formData.color
  }; //새로운 일정의 객체를 생성 -> App.jsx의 event에 적용

  //  부모로부터 받은 setEvents 이용해 리스트 업데이트
  setEvents([...events, newSchedule]);
  alert
}; // 확인 버튼 클릭 시 실행되는 함수   
  return (
    <div>
      <h2 className='Htitle'>🎯 일정 등록</h2>
      <p className='description'>내용을 입력 후 확인 버튼을 누르시오</p>
      <div className='form-date' name='날짜선택'>
        <label>날짜선택</label>
        <input 
          type="date" 
          name='date' 
          value={formData.date} 
          onChange={handleInputChange}
          />
      </div>
      <div className='form-memo' name='메모내용'>
        <label>메모
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
        <select name="color" value={formData.color} onChange={handleInputChange}>
          <option value="#3b82f6">파랑 (업무)</option>
          <option value="#ef4444">빨강 (중요)</option>
          <option value="#10b981">초록 (개인)</option>
          <option value="#f59e0b">노랑 (기타)</option>
        </select>
      </div>
      <button className='confirm-btn' name='확인버튼' onClick={handleConfirm}>확인</button>
    </div>
  )
};
export default HandleBarPage
