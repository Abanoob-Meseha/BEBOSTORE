import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";
import Button from "../Button/Button";
import { FaSquareGithub } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const inputStyle: string =
      "mx-auto w-[90%] p-2 border-b border-b-blue-800 focus:outline-blue-800";
    const iconStyle: string = "hover:-translate-x-1 hover:-translate-y-1"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled , setDisabled] = useState(false);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()
      setDisabled(true)
      const user = {
        email,
        password,
      }
      setTimeout(()=>{
        console.log(user);
        setDisabled(false);
      } , 3000)
    }
    return (
      <div className="container mt-2 p-4">
        <h1 className="font-bold text-center text-3xl text-blue-950">Login</h1>
        <div className="min-w-full flex flex-col gap-4 mt-6">
          <input
            className={inputStyle}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            className={inputStyle}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Link href={""} className="w-[90%] mx-auto text-blue-950">Forget Password ?</Link>
          <Button type="primary" className="mt-6" onClick={handleSubmit} disabled={disabled}>
            Login
          </Button>
        </div>
        <div className="mt-4 text-center">
          <h1>----------- Or Login using -----------</h1>
          <div className="flex mt-2 items-baseline w-[80%] justify-between mx-auto">
            <FaGooglePlusSquare size={45} color="red" className={iconStyle}/>
            <FaFacebookSquare size={45} color="blue" className={iconStyle}/>
            <FaSquareGithub size={45} className={iconStyle}/>
          </div>
        </div>
      </div>
    );
  };

export default LoginForm