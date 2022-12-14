import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const userInputRef = useRef()
  const [isAgainGetData, setIsAgainGetData] = useState(false);
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  axios.interceptors.request.use(
    function (config) {
      setIsLoading(true)
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      setIsLoading(false);
      return response;
    },
    function (error) {

      return Promise.reject(error);
    }
  );
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
      } catch (error) {
        router.push('loginPage');
      }
    }
    handleGetDatasFromServer();
    return () => handleGetDatasFromServer()
  }, [isAgainGetData]);



  function logOut() {
    localStorage.removeItem('accessToken');
    router.push('loginPage')
  }




  async function handleAddTodo() {
    const todo = userInputRef.current.value;
    try {
      const accesstoken = localStorage.getItem("accessToken");
      await axios.post("http://localhost:8000/todos/addTodo", { todo }, {
        headers: {
          accesstoken
        },
      }).then((res) => {
        if (res) {
          if (res.data.status === true) {
            setIsAgainGetData(prev => !prev);
            userInputRef.current.value = ""
          }
        }
      })
    } catch (error) {
      console.log(error)
    }


  }




  async function deleteTodo(todo,id) {
    try {
      const accesstoken = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:8000/todos/deleteTodo/${id}`, {
        headers: {
          accesstoken
        }
      } 
      ).then(res=> {
        if (res) {
          if (res.data.status === true) {
            setIsAgainGetData(prev => !prev);            
          }
        }
      } )
    } catch (error) {

    }
  }


  return (
    <>
      {isLoading === true ? <p>Loading</p> : ''}
      <h1>HomePage</h1>
      <button onClick={logOut}>??????????</button>
      <input ref={userInputRef} />
      <button onClick={handleAddTodo}>??????????</button>
      <div style={{ width: 'auto', height: `100px`, overflow: 'scroll' }}>
        {todos.length > 0
          ? todos.map((todo, i) => {
            return <div style={{ display: 'flex', width: `50%`, justifyContent: 'space-around' }} key={todo + i}>
              {todo}
              <button onClick={() => deleteTodo(todo,i)}>??????????</button>
            </div>;
          })
          : ""}
      </div>
    </>
  );
}
export default HomePage