import { useState } from "react";
import {auth} from "../config/firebase-config.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Label } from "./ui/label.jsx";
import { cn } from "../lib/utils.js";
import { IconBrandGoogle } from "@tabler/icons-react";
 import { Input } from "./ui/input.jsx"
import { useNavigate } from "react-router-dom";

export function SignupForm() {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUsername]=useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
   
   try {
     const userCredentials=await  createUserWithEmailAndPassword(auth,email,password)
     if(!userCredentials)
      throw new Error("User credentials not found.")
    console.log(userCredentials)
   } catch (error) {
    console.log(error)
   }


  };
 const navigate = useNavigate();

 function handleClick() {
    navigate('/signin')
 }

  return (
    <>
  
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Fintracker
      </h2>
 
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="username">Username</Label>
           
           <Input id="username" placeholder="Tyler" type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
          
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
         
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          
<Input id="password" placeholder="••••••••" type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </LabelInputContainer>
          <div className="flex items-center my-4">
          <hr className="flex-1 border-neutral-300 dark:border-neutral-700" />
          <hr className="flex-1 border-neutral-300 dark:border-neutral-700" />
        </div>
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
          
              <div className="flex items-center my-4">
          <hr className="flex-1 border-neutral-300 dark:border-neutral-700" />
          <span className="mx-2 text-sm text-neutral-500 dark:text-neutral-400">or</span>
          <hr className="flex-1 border-neutral-300 dark:border-neutral-700" />
        </div>
         <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="button"
          onClick={handleClick}
        >
          Sign In &rarr;
          <BottomGradient />
        </button>
        

      </form>
    </div>
      </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

