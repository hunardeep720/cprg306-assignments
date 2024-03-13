"use client";
import Link from 'next/link';
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Page from "./shopping-list/page.js";
export default function page() {
    const [log, setLog] = useState(false);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function handleSignIn() {
    await gitHubSignIn();
    setLog(true);
  }
  return (
    <main>
      {user ? (
        <Page/>
      ) : (
        <div className='flex flex-col items-center justify-center h-screen bg-white'>
          <div><h1 className='font-bold text-black text-xl'>Click on sign on to sign with Github</h1></div>
           <button className='m-5 bg-blue-500 w-32 h-14' onClick={handleSignIn}>Sign in</button> 
        </div>
      )}

    </main>
  );
  
}
