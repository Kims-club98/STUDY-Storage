import React from 'react'

// 자식 컴포넌트
function MyComponent (props) {
  raturn(
    <>
      <h2>Props 객체 사용하기</h2>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <p>{props.p3}</p>
      <p>{props.p4}</p>
    </>
  )
}


// 부모 컴포넌트
function App () {
  return (
    <>
      <MyComponent p1={'HTML'} p2={'CSS'} p3={'React'} p4={'JavaScript'} />
    </>
  )
}

export default dumi
