// import React from "react";
// import { useParams } from "react-router-dom";

// const Room = () => {
//   const { roomID } = useParams();
//   return (
//     <div>Room {roomID}</div>
//   )
// }

// export default Room

import React, {useEffect, useRef} from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams, useLocation } from 'react-router-dom';


export default function App() {
  const {roomID} = useParams();
  const location = useLocation();
  const containerRef = useRef(null);

  // Get role from URL query string
  const queryParams = new URLSearchParams(location.search);
  const role_str = queryParams.get("role") || "Audience";


  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url:
        window.location.protocol + '//' + 
        window.location.host + window.location.pathname +
        '?roomID=' +
        roomID +
        '&role=Cohost',
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url:
     window.location.protocol + '//' + 
     window.location.host + window.location.pathname +
      '?roomID=' +
      roomID +
      '&role=Audience',
  });
 // generate Kit Token
  const appID = 1329310416;
  const serverSecret = "72e035d0248fb0bb4ceac1d5216601ad";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID, 
    serverSecret, 
    roomID,  
    Date.now().toString(),
    role
  );


  // start the call

  useEffect(()  => {
    if (!roomID || !containerRef.current) return;
    let myMeeting = async (element) => {
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp?.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
      });
  };
  myMeeting();
  return () => {
    if (zp) {
      zp.destroy();
    }
  };
  }, [roomID])

  

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
