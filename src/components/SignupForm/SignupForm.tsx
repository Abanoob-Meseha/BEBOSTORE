import {  useState } from "react";
import Button from "../Button/Button";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const SignupForm = () => {
  const inputStyle: string =
    "mx-auto w-[90%] p-2 border-b border-b-blue-800 focus:outline-blue-800";
  const iconStyle: string = "hover:-translate-x-1 hover:-translate-y-1";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisabled(true);
    const user = {
      username,
      email,
      password,
    };
    setTimeout(()=>{
      console.log(user);
      setDisabled(false);
    } , 3000)

  };
  return (
    <div className="container mt-2 p-4">
      <h1 className="font-bold text-center text-3xl text-blue-950">Sign Up</h1>
      <div className="min-w-full flex flex-col gap-4 mt-6">
        <input
          className={inputStyle}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={inputStyle}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={inputStyle}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className={inputStyle}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="primary" className="mt-6" onClick={handleSubmit} disabled={disabled}>
          Sign Up
        </Button>
      </div>
      <div className="mt-4 text-center">
        <h1>----------- Or Signup using -----------</h1>
        <div className="flex mt-2 items-baseline w-[80%] justify-between mx-auto">
          <FaGooglePlusSquare size={45} color="red" className={iconStyle} />
          <FaFacebookSquare size={45} color="blue" className={iconStyle} />
          <FaSquareGithub size={45} className={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
