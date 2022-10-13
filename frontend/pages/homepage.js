import axios from "axios";
import { useState,useEffect, useRef } from 'react'
const HomePage = () => {
    const [todos, setTodos] = useState([]);
    const userInputRef = useRef()
    const [isAgainGetData,setIsAgainGetData] = useState(false) 
     const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
      async function handleGetDatasFromServer() {
        try {
          const accessToken = localStorage.getItem("accessToken");
          const data = await axios.get("http://localhost:8000/myInfo", {
            headers: {
              accessToken: accessToken,
            },
          });
          setTodos(data.data.data.todos);
        } catch (error) {}
      }
      handleGetDatasFromServer();
      return ()=> handleGetDatasFromServer()
    }, [isAgainGetData]);

  async function handleAddTodo() {
    const todo = userInputRef.current.value;
    setIsLoading(true)
       try {
         const accesstoken = localStorage.getItem("accessToken");
         const data = await axios.post("http://localhost:8000/todos/addTodo",{todo}, {
           headers: {
             accesstoken
           },
         }).then(() => {
           setIsAgainGetData(!isAgainGetData);
           setIsLoading(false)
         });
         
        } catch (error) {}
      
        
    }


   
    return (
      <>
        {isLoading ===true ? <p>Loading</p>:''}
        <h1>HomePage</h1>
        <button onClick={() => {
          localStorage.removeItem('accessToken')
        }}>ГАРАХ</button>
        <input ref={userInputRef} />
        <button onClick={() => handleAddTodo()}>НЭМЭХ</button>
        <ul style={{width:'auto',height:`100px`,overflow:'scroll'}}>
          {todos.length > 0
            ? todos.map((todo, i) => {
                return <li key={todo + i}>{todo}</li>;
              })
            : ""}
        </ul>
      </>
    );
}
export default HomePage