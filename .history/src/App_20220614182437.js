import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (타이틀, 사진, 결과값)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 선택이 됨
// 5. 3번 4번 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀜 (win - 블루, lose - 레드, same - 블랙)

function App() {
  return (
    <div className='main'>
      <Box />
      <Box />
    </div>
  );
}

export default App;
