import { useEffect } from "react";
import { useState } from "react";
import { registerUser } from "../../controllers/authController";
import { ToastProvider, useToasts } from 'react-toast-notifications';

function SignUp() {
  const { addToast } = useToasts();
const [name,setName]=useState("");
const[email,setEmail]=useState("");
const onSignUpClick=(e)=>{
  e.preventDefault();
  registerUser(name,email).then(data=>{
    console.log(data);
    if (data.sucess==true) {
      // enqueueSnackbar("registered sucessfully",{variant:"success",autoHideDuration:2000});
      addToast('Saved Successfully', { appearance: 'success',autoDismiss:5 });
      setEmail('');
      setName('')
    }else{
      // enqueueSnackbar("email already exist",{variant:"error",autoHideDuration:2000});
      addToast(data.error, { appearance: 'error', autoDismiss: 5 });
    }
  });
  console.log("click");
}
useEffect(()=>{
  console.log(name);
  console.log(email);
    },[name,email]);


    return (   <div className="flex justify-center mt-0 pt-10">
    <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="submit" onSubmit={onSignUpClick}>
              <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="email" id="name" value={name} onChange={e=>{setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="email" id="email" value={email} onChange={e=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
               
                
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
              </form>
        </div>
          </div> );
}

export default SignUp;


