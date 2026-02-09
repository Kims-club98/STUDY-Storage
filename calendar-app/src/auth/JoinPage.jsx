// 회원가입을 위한 페이지 auth는 인증 관련 폴더
import React, { useState } from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { Link, useNavigate } from "react-router-dom";

const JoinPage = () => {
  //받아야 할것: username, email, password, role
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('ROLE_USER')
  //JoinPage가 새로 생성될 때마다 사용자가 입력한값을 처리하는 함수도
  //매번 새로 만들어지는 것은 비효율적이다.-> useCallback, useMemo -> []
  const handleUsername = (value) => {
    setUsername(value)
  }// end of handleUsername
  const handleEmail = (value) => {
    setEmail(value)
  }// end of handleEmail
  const handlePassword = (value) => {
    setPassword(value)
  }// end of handlePassword
  const handleRole = (value) => {
    setRole(value)
  }// end of handleRole
// ++++++++++++++++++++++++++++++++++++++++++++ input 값의 상태(==State)를 반영하지 위해 사용하는 이벤트 핸들러(EventHandler)
// => 각자 입력받은 내용(username, Email, Password, Role)을 "최신상태"로 동기화(계속 내용 Update)
 const handleJoin = () => { // 화원가입 처리에 대한 요청하는 함수
  console.log("회원가입 처리에 대하여 요청하는 함수(try-catch, handleJoin)")
} 

  return (
    <>
      <Header />
      <div className="row my-5 justify-content-center">
        <div className="col-8 col-md-6 col-lg-4">
          <h3 className="text-center mb-5">회원가입</h3>
          <form id="join" method="post">
            <div className="input-group my-2">
              <div className="input-group-text">
                이&nbsp;&nbsp;&nbsp;&nbsp;름
              </div>
              <input
                onChange={(e) => {
                  handleUsername(e.target.value);
                }}
                className="form-control"
                id="name"
              />
            </div>
            <div className="input-group my-2">
              <div className="input-group-text">이 메 일</div>
              <input
                onChange={(e) => {
                  handleEmail(e.target.value);
                }}
                className="form-control"
                id="email"
                autoComplete="new-email"
              />
            </div>
            <div className="input-group">
              <div className="input-group-text">비밀번호</div>
              <input
                className="form-control"
                onChange={(e) => {
                  handlePassword(e.target.value);
                }}
                id="password"
                type="password"
                autoComplete="new-password"
              />
            </div>
            {/* 역할 선택 */}
            <div className="input-group my-2">
              <div className="input-group-text">
                역&nbsp;&nbsp;&nbsp;&nbsp;할
              </div>
              <select
                className="form-select"
                value={role}
                onChange={(e) => handleRole(e.target.value)}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="mt-5">
              <button
                onClick={handleJoin}
                type="button"
                className="btn btn-success w-100"
              >
                회원가입
              </button>
            </div>
            <div className="text-end mt-3 my-5">
              <Link to="/login">로그인</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinPage;
