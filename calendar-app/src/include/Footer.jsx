// 페이지 하단에 고정적으로 위치
import React from 'react'

// 화살표 함수(Arrow 함수)에서 return값이 필요한 구조와 필요하지 않는 구조
// () => (render 생략)
// () => {return (<></>)}
const Footer = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom justify-content-center">
        <span className="navbar-text">MakCoding Copyright &copy; 2025</span>
      </nav>
    </>
  )
}

export default Footer