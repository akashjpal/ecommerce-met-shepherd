import React from "react";
import { VscDebugDisconnect } from "react-icons/vsc";

export default function Offline(){
    return (
        <div className="flex flex-col min-h-screen justify-center items-center font-semibold text-xl text-center leading-loose">
            <p><VscDebugDisconnect className="text-[5rem]"/></p>
            <p >You are Offline.<br/>Don't worry, we will refresh page when you are online</p>
            
        </div>
    )
}