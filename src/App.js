/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  

  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>

      <button onClick={() => {
        let copy = [...글제목]
        글제목변경(copy.sort())
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글 제목 바꿔버리깅</button>
      
      {/* <div className="list">
        <h4 onClick={() => {
            setModal(!modal);

        }}>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function (a, i){
          const date = new Date;
          return(
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}>{글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation()
                  let copy = [...따봉]
                  copy[i] += 1
                  따봉변경(copy)
                }}>👍{따봉[i]}</span>
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }
      
      <input type="text" onChange={(e)=>{
        입력값변경(e.target.value)
      }} />
      <button onClick={() => {
        if(입력값 == '') {
          alert('글자를 입력해 주세요')
        } else {
          let copy = [...글제목];
          let like = [...따봉];
          copy.unshift(입력값);
          like.unshift(0);
          글제목변경(copy)
          따봉변경(like);
        }
      }}>추가하기</button>

      {
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경} /> : null
      }

      
    </div>
  )
}



function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        props.글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬 독학'])
      }}>글수정</button>
    </div>
  )
}
export default App;
