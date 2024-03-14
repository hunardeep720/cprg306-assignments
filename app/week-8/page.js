"use client";
import { useUserAuth } from "./_utils/auth-context";
import Page from "./shopping-list/page.js";
export default function page() {
  const { user, gitHubSignIn,googleSignIn} = useUserAuth();
  async function handleSignIn() {
    await gitHubSignIn();
  }
  async function handleGoogleSignIn() {
    await googleSignIn();
  }
  return (
    <main>
      {user ? (
        <Page/>
      ) : (
        <div className='flex flex-col items-center justify-center h-screen bg-white'>
          <div><h1 className='font-bold text-black text-xl'>Click on sign</h1></div>
           <button className='m-5 bg-blue-500 w-32 h-14' onClick={handleSignIn}>Sign in with Github</button> 
              <button className='m-5 bg-red-500 w-32 h-14' onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
      )}

    </main>
  );
  
}
