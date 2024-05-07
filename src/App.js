
import './App.css';
import {db} from "./firebase";
import {set, ref, onValue, remove, update} from "firebase/database";
import {uid} from "uid";
import {useState , useEffect} from "react";
function App() {
  //read
//   const [todo, setTodo]= useState("");
//   const [todos, setTodos]= useState([]);
//   const [edit, setEdit]= useState(false);
//   const [temp, setTemp]= useState("");
 
//   //write
//   const change = (e)=>{
//     setTodo(e.target.value);
// };
//     useEffect(()=>{
      
//       onValue(ref(db),(snapshot)=>{
//         setTodos([]);
//         const data= snapshot.val();
//         if(data !== null) {
//           Object.values(data).map((todo)=>{
//             setTodos((oldAray)=>[...oldAray,todo]);
            
//           });
//         }
//       });
//     },[]);
    
//     const write = () =>{
//         const uuid=  uid();
//         set(ref(db,`/${uuid}`),{
//             todo,
//             uuid,
//         });
//         setTodo("");
//     };
//     const dele =(todo)=>{
//       remove(ref(db,`/${todo.uuid}`))
//     };
//     const up =(todo)=>{
//       setEdit(true);
//       setTemp(todo.uuid);
//       setTodo(todo.todo);
//     }
//     const thaydoi = ()=>{
//       update(ref(db,`/${temp}`),{
//         todo,
//         uuid: temp,
//       });
//       setTodo("");
//       setEdit(false);
//     }
    const den1 = (e)=>{
      if(e.target.checked){
      update(ref(db,"den1"),{
        den1:1
      });
    }
    else{
      update(ref(db,"den1"),{
        den1:0
      });
    }
    }
    const den2 = (e)=>{
      if(e.target.checked){
      update(ref(db,"den2"),{
        den2:1
      });
    }
    else{
      update(ref(db,"den2"),{
        den2:0
      });
    }
    }
    const den3 = (e)=>{
      if(e.target.checked){
      update(ref(db,"den3"),{
        den3:1
      });
    }
    else{
      update(ref(db,"den3"),{
        den3:0
      });
    }
    }
    const den4 = (e)=>{
      if(e.target.checked){
      update(ref(db,"den4"),{
        den4:1
      });
    }
    else{
      update(ref(db,"den4"),{
        den4:0
      });
    }
    }
  return (
    <div >
      {/* <button onClick={den1}>Đèm 1</button>
    <input type="text" value={todo} onChange={change} />
    {edit ?(
    <>
    <button onClick={thaydoi}>Nút nhấn Sửa</button>
    <button onClick={()=>setEdit(false)}>X</button>
    </>
    ):(<button onClick={write}>Nút nhấn</button>)}
    
    
    {todos.map((todo)=>(
      <>
      <h1>{todo.todo}</h1>
      <button onClick={()=> up(todo)}>Update</button>
      <button onClick={()=> dele(todo)}>Delete</button>
      </>
    ))} */}



<div class="container">
    <div class="h">Nhà Thông Minh</div>
    <div class="q">
        <div class="bq">
        <div class="a">
             <div class="b">
            <span class="tl">ĐÈN 1</span>
            <input type="checkbox" id="switch" onChange={den1}/>
            <label for="switch" class="button">Toggle</label>
            </div>
            <div class="b">
            <span class="tl">ĐÈN 2</span>
            <input type="checkbox" id="switch2" onChange={den2}/>
            <label for="switch2" class="button">Toggle</label>
            </div>
         </div>
         <div class="a">
        <div class="b">
       <span class="tl">ĐÈN 3</span>
       <input type="checkbox" id="switch3" onChange={den3}/>
       <label for="switch3" class="button">Toggle</label>
       </div>
       <div class="b">
       <span class="tl">ĐÈN 4</span>
       <input type="checkbox" id="switch4" onChange={den4}/>
       <label for="switch4" class="button">Toggle</label>
       </div>
        </div>
    </div>
    {/* <div class="bq">
        <div class="a">
             <div class="b">
            <span class="tl">ĐÈN 5</span>
            <input type="checkbox" id="switch5"/>
            <label for="switch5" class="button">Toggle</label>
            </div>
            <div class="b">
            <span class="tl">ĐÈN 6</span>
            <input type="checkbox" id="switch6"/>
            <label for="switch6" class="button">Toggle</label>
            </div>
         </div>
         <div class="a">
        <div class="b">
       <span class="tl">ĐÈN 7</span>
       <input type="checkbox" id="switch7"/>
       <label for="switch7" class="button">Toggle</label>
       </div>
       <div class="b">
       <span class="tl">ĐÈN 8</span>
       <input type="checkbox" id="switch8"/>
       <label for="switch8" class="button">Toggle</label>
       </div>
        </div> */}
    {/* </div> */}
</div>
</div>
</div>
    // menu
    



  );
}

export default App;
