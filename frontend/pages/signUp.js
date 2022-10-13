import react from 'react';
import axios from 'axios';
import {useRouter} from 'next/router'
const SignUp = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = react.useState({});

    function handleUserInput(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

  async function handleSendDataToServer() {
    await axios
      .post("http://localhost:8000/signUp", userInfo)
      .then(async (res) => {
        const accessToken = res.data.accesstoken;
        await localStorage.setItem("accessToken", accessToken);
        router.push("homepage");
      })
      .catch((err) => console.log(err)); 

      //  await axios.post("http://localhost:8000/signUp", userInfo)
      //    .then((res) => {
      //      router.push("homepage");
      //  })
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
        <button onClick={handleSendDataToServer}>БҮРТГҮҮЛЭХ</button>
      </>
    );
}
export default SignUp