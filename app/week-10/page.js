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
        <div className='flex flex-col items-center justify-center h-screen bg-black'>
          <div><h1 className='font-bold text-white text-2xl'>Click on sign</h1></div>
           <button className='m-5 font-bold bg-green-500 w-32 h-14 hover:bg-orange-600' onClick={handleSignIn}>Sign in with Github</button> 
              <button className='m-5 font-bold bg-green-500 w-32 h-14 hover:bg-orange-600' onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
      )}

    </main>
  );
  
}
