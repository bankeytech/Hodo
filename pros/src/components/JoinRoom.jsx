import React from 'react'
import { useNavigate } from 'react-router-dom';

const Joinroom = () => {
  const [roomID, setRoomID] = React.useState("");
  const navigate = useNavigate();
  return (
    <div id="joinsection">
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-4xl font-semibold tracking-tight text-white">Join StreamLive Room</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.
                  </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                    <label for="roomID" className="sr-only">
                      Room ID
                    </label>
                    <input 
                     id="roomID"
                     value = {roomID}
                     onChange={(e) => setRoomID(e.target.value)}
                     type="text" 
                     className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
                     placeholder="Enter Room Id"/>
                    <button 
                    onClick={() => navigate(`/room/${roomID}`)}
                    disabled = {roomID.length === 0}
                    className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                      Join Now
                    </button>
                </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg 
                        className="size-6 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        aria-hidden="true" 
                        data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                        </svg>
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">
                      Weekly articles
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-400">
                     Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                    </dd>
                </div>
                <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg 
                        className="size-6 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        aria-hidden="true" 
                        data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"></path>
                        </svg>
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">
                      No spam
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-400">
                     Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                    </dd>
                </div>
            </dl>
        </div>
    </div>

    <div 
      className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" 
      aria-hidden="true"
    >
        <div 
        className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" 
        style= {{
          clipPath: 
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",

        }}></div>
    </div>
 </div>
  
</div>
  )
}

export default Joinroom