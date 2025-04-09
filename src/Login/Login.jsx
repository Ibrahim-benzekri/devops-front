import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { UseLocalState } from '../Util/UseLocalState';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
      email: "",
      password: "",
    });
  const [error, setError] = useState("");
  const [jwt, setJwt] = UseLocalState("", "token");
  const [showError, setShowError] = useState(false);
  const [showSucess, setShowSucess] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        setError("");
      }, 2000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [error]);
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  function sendLoginRequest() {
    if (!EmailValidation(user.email) || user.password === "") {
      setError("Please Enter All Fields");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      };
      fetch("http://localhost:8080/api/v1/auth/authenticate", requestOptions)
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const text = await response.text();
            throw new Error(text);
          }
        })
        .then((token) => {
          setShowSucess(true);
          setShowError(false);

          setTimeout(() => setShowSucess(false), 2000);
          setTimeout(() => navigate("/"), 1000);
          setJwt(token.token);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }


  return (
    <div className='mt-24'>
      {showError && (
        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">Error :</span> {error}
      </div>
      )}

      
      {showSucess && (
        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span class="font-medium">Success :</span> 200 
      </div>
      )}

  <div class="flex w-full h-full  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
  <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')"
        }}
    ></div>


    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-8" src="" alt=""/>
        </div>

        <p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
        </p>

        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <div class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"> login to your account</div>

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
            <input name="email" value={user.email ? user.email : ""} onChange={handleChange} class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
        </div>

        <div class="mt-4">
            <div class="flex justify-between">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                <div class="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</div>
            </div>

            <input name="password" value={user.password ? user.password : ""} onChange={handleChange} class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
        </div>

        <div class="mt-6">
            <button type='submit' onClick={() => sendLoginRequest()} class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
            </button>
        </div>

        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <div onClick={()=>{navigate("/signup")}} class="text-xs cursor-pointer text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</div>

            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
    </div>
</div>
  </div>
  )
}
