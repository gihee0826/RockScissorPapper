import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (타이틀, 사진, 결과값)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 선택이 됨
// 5. 3번 4번 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀜 (win - 블루, lose - 레드, same - 블랙)
const choice = {
  rock: {
    name: "Rock",
    img: "https://images.vexels.com/media/users/3/145831/isolated/preview/53a0234955caf282d12d7de3ca8fd084-rubble-rock-illustration.png"
  },
  scissor: {
    name: "Scissor",
    img: "https://static.vecteezy.com/system/resources/previews/003/240/783/original/scissor-illustration-in-flat-design-vector.jpg"
  },
  papper: {
    name: "Papper",
    img: "https://thumbs.dreamstime.com/b/lined-letter-paper-511157.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result,setResult] = useState(null)
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객페에 키값만 뽑아서 배열로 만들어 주는 함수
    console.log("itemArray", itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }
  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} />
        <Box title='Computer' item={computerSelect} />
      </div>
      <div className='main'>
        <button onClick={() => play('scissor')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('papper')}>보</button>
      </div>
    </div>
  );
}

export default App;
