import React from "react";
import axios from "axios";
import { useRouter } from 'next/router';
const LoginPage = () => {
  const [userInfo, setUserInfo] = React.useState({});
  const router = useRouter();
  function handleUserInput(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  async function handleSendDataToServer() {
    await axios
      .post("http://localhost:8000/login", userInfo)
      .then(async(res) => {
        const accessToken = res.data.accesstoken;
        await localStorage.setItem("accessToken", accessToken);
        router.push("homepage")
  }).catch(err=>console.log(err));
  }
    return (
      <>
        <input onChange={handleUserInput} name="email" placeholder="И-Майл" />
        <input
          onChange={handleUserInput}
          name="password"
          placeholder="Нууц үг"
          type="password"
        />
        <button onClick={handleSendDataToServer}>НЭВТРЭХ</button>
      </>
    ); 
}
export default LoginPage 