// 로그인 창 페이지
import React, { useState } from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  // 사용자가 입력할 이메일과 비번의 상수값이다.
  // 이 값이 변하면 화면을 새로 그린다 -> LoginPage함수가 새로 생성된다.
  const [tempUser,setTempUser] = useState({
      email: 'kiwi@hot.com',
      password: '123'
  })
    // 접두어에 use 가 있으면 Hook이다
  // a 태그 대신(HTML) 페이지 이동 시 사용한다. - refresh 옵션이 있음 - true/false
  const navigate = useNavigate() // 로그인 성공 시 HomePage로 이동 => 이를 기반으로 하단 try - catch 함수에 사용 가능 (HTML 의 a 태그와 동일하다 생각하기)
  const onLogin = async() => { // 로그인 정상 작동 시 HomePage로 이동, 아니면 에러메시지 발생
    try{
      navigate("/") // HomePage로 이동하기
    }
    catch(error){
      console.error("로그인 에러 발생(onLogin)", error)
    }
  }// end of onLogin
  const googleLogin = async() => {
    try{
      navigate("/") // google 로그인 완료 시 HomePage로 이동
    }
    catch(error){
      console.error("로그인 에러 발생(googleLogin)", error)
    }
  }// end of googleLogin
  const changeUser = (event) =>{ // 이벤트(로그인 성공 시) 발생 시 발동
    console.log(event.target.value) // 사용자가 입력 한 아이디와 비번을 출력한다!!
    const id = event.target.id // 사용자가 입력한 id 값 => 변수 id
    const value = event.target.value // 사용자가 입력 한 password값(정의는 value) => 변수 value
    setTempUser({...tempUser, [id]:value})
  }
    /*
    ********** 예시 ***************
  const sonata = {"speedUp":0, "carName":"2026년형소나타", "wheelNum:":4}
  */


  // 로그인 성공 시 HomePage로 이동
  return (
    <>
      <Header />
      <div className="row my-5 justify-content-center">
        <div className="col-8 col-md-6 col-lg-4">
          <h3 className="text-center mb-5">로그인</h3>
          <form id="frm" method="post">
            <div className="input-group my-2">
              <div className="input-group-text">이 메 일</div>
              <input
                className="form-control"
                id="email"
                value="kiwi@hot.com"
                onChange={(e) => changeUser(e)}
              />
            </div>
            <div className="input-group">
              <div className="input-group-text">비밀번호</div>
              <input
                onChange={(e) => changeUser(e)}
                className="form-control"
                id="password"
                type="password"
                value="123"
              />
            </div>
          </form>
          <div className="my-3">
            <button
              onClick={onLogin}
              type="button"
              className="btn btn-success w-100"
            >
              로그인
            </button>
          </div>
          <div className="my-3">
            <button
              onClick={googleLogin}
              type="button"
              className="btn btn-primary w-100"
            >
              Google
            </button>
          </div>
          <div className="text-end mt-3">
            <Link to="/join">회원가입</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
