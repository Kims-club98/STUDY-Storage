import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
<<<<<<< HEAD

const ScheduleModal = ({show, handleClose, selectDate, onSave}) => {
=======
// ▼ 부모에게서 받은 변수들(자식 노드에서 사용 가능함)
const ScheduleModal = ({show, handleClose, selectDate, onSave, onDelete, initialData}) => {
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
// 1. 입력한 폼을 통합하여 관리해줌 (관리를 위한 박스 생성)
  const [formData, setFormData] = useState({
    title:'',
    startDate:'',
    endDate:'',
    category:'blue',
    description:''
  })

  //2. 부모에게 날짜 전달 시(달력에서 클릭) 날짜 상태를 업데이트 함(클릭한 날을 시작날짜로...)
<<<<<<< HEAD
  useEffect(() =>{
    if(show){
      setFormData({
        ...formData,
        startDate: selectDate || '',
        endDate: selectDate || '',
        category: "blue",
        title: '', // 모달 열릴 떄마다 초기화(이후 바꿔주기 - 있는 경우에는 남겨야 함) ***
        description: '' // 상세 내역 초기화(이후 바꿔주기 - 있는 경우에는 남겨야 함) ***
      })
    }
  }, [show, selectDate])

=======
  // if/else를 통해 수정/등록모드를 만듦
  useEffect(() => {
    if(show){
      if(initialData){
        // [수정모드] 부모로부터 받은 데이터로 폼 채우기
        setFormData({...initialData})
      
    }else{
      // [등록모드] 초기화 및 클릭 날짜로 이동하기
      setFormData({
        title:'',
        startDate:selectDate || '',
        endDate:selectDate || '',
        category:'blue',
        description:''
      })
    }
  }
  },[show, initialData, selectDate]);
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
  //3. 입력 값이 변할 때(event - 약칭 e) -> 실행되는 함수
  const handleChange = (e) => {
    const {id, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    })) 
  } // input 값 변할 때, 그 안의 id/value값을 꺼내서 변수에 담고 기존의 값을 모두 가져와(...prev) id를 key로한 체, 나머지 value값을 가지고 옴을 의미함

<<<<<<< HEAD
  //4. 저쟝버튼 클릭 시 호출하기(실행순서 issue 발생함)
  const handleSubmit = () => {
=======
  const handleEventClick = (info) => {
    setFormData({
      title: info.e.title,
      startDate: info.e.startDate,
      endDate: info.e.endDate,
      category: info.e.category,
      description: info.e.description
    })
    setModelOpen(true)
  }

  //4. 저쟝버튼 클릭 시 호출하기(실행순서 issue 발생함) + firebase에 전달하기
  const handleSubmit = async() => {
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
    if(!formData.title.trim() || !formData.startDate || !formData.endDate ) {
      alert("일정제목/시작-종료 날짜를 입력해주세요!")
      return // 함수를 반드시 종료시켜야 onSave가 실행이 가능하다(return 이 없는 것은 종료버튼이 없는 것과 같다...)
    }
  // 5. 부모 컴포넌트(CommonCalendar)의 handleSaveEvent 함수를 실행시킨다...
  onSave(formData)
<<<<<<< HEAD

  }
=======
  handleClose(formData) // 저장 후 닫기
  }

  // 6. 등록을 삭제하기 위한 함수
  const handleEventDelete = () => {
    //1. 지울지 여부를 한 번 물어봄
    if(window.confirm("이 일정을 삭제하겠습니까?")){
      // 2. 부모에게 받은 setEvents 활용하여 해당 ID만을 필터링 해주어야 한다.
      onDelete(formData.id);
      onDelete(formData.id) // 부모에 id 전달해 Firebase에서도 삭제를 요청하게 됨.
      // 3. 삭제 후 모달창 닫기
      handleClose();
    }
  }

>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
  return (
<Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>🗓️ 일정 등록</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>일정 제목</Form.Label>
            <Form.Control
              id="title"
              type="text"
              placeholder="무엇을 하시나요?"
              value={formData.title}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>

          <div className="row">
            <Form.Group className="col-md-6 mb-3">
              <Form.Label>시작 날짜</Form.Label>
              <Form.Control
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="col-md-6 mb-3">
              <Form.Label>종료 날짜</Form.Label>
              <Form.Control
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>일정 분류</Form.Label>
            <Form.Select
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="blue">💙 업무일정</option>
              <option value="orange">🧡 중요일정</option>
<<<<<<< HEAD
              <option value="yellow">💛 개인일정</option>
=======
              <option value="green">💚 개인일정</option>
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
              <option value="purple">💜 기타</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>상세 내역</Form.Label>
            <Form.Control
              id="description"
              as="textarea"
              rows={5}
              placeholder="특이사항을 입력하세요."
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
<<<<<<< HEAD
        <Button variant="secondary" onClick={handleClose}>
          취소하기
        </Button>
        <Button variant="warning" onClick={handleSubmit}>
          등록하기(confirm)
=======
        {/* 수정 모드일 때만 -> 삭제하기 버튼이 나타나게 하기!! */}
        {initialData && (
          <Button variant="danger" onClick={handleEventDelete} className="me-auto">
            삭제하기
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          취소하기
        </Button>
        <Button variant={initialData ? "success" : "warning"} onClick={handleSubmit}>
          {initialData ? "수정하기":"등록하기"}
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleModal;


// 필요한 사항
<<<<<<< HEAD
// 등록된 일정을 클릭 시 수정폼을 구현하지 않음
// 수정 폼을 만들 시 삭제 버튼이 만들어 지도록 하지 않음
// 현재 구현된 것: 등록 폼창, 등록하기(삭제,수정은 구현 x)
=======
// 등록된 일정을 클릭 시 수정폼을 구현하지 않음(완료)
// 수정 폼을 만들 시 삭제 버튼이 만들어 지도록 하지 않음
// 현재 구현된 것: 등록 폼창, 등록하기(삭제은 구현 x)
>>>>>>> 9a20083b0cd33220d9cdbc0c15ec932eda73a841
