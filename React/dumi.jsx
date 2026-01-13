function FrontComp(props){
  const BackComp = ({onMyEvent}) => {
    return( <>
      <li><a href="/" onClick={(event) => {
        event.preventDefault();
        onMyEvent('백안드 클릭됨(자식전달')
      }}>백엔드</a></li>
      <ul>
        <li>JAVA</li>
        <li>Oracle</li>
        <li>MySQL</li>
      </ul>
    </>)
  }
}
function App() {
  return (<>
  <h2>React-Event</h2>
  <BackComp onMyEvent={(msg)=>{
    alert(msg)
  }}
  />
  </>)
}