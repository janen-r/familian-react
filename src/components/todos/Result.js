import React, { useCallback, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import uuid from 'react-uuid'
import ClearIcon from '@mui/icons-material/Clear';
import ShareIcon from '@mui/icons-material/Share';
import {removeEntry, toggleEntryDone} from "../../features/todoSlice";
import {useDispatch} from "react-redux";
import { findRelation } from "../../common/common";
import { capitalizeFirstLetter, generateWhatsAppSharingContent } from "../../common/common";
import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
 } from 'vertical-timeline-component-react';
 import { getWhatsAppClickToChatLink } from 'share-text-to-whatsapp';
 import Button from "@material-tailwind/react/Button";
 import ReactCanvasConfetti from "react-canvas-confetti";

 const customTheme = {
  lineColor: '#d0cdc4',
  dotColor: '#262626',
  borderDotColor: '#d0cdc4',
  titleColor: '#bf9765',
  subtitleColor: '#bf9765',
  // textColor: '#262626',
 };

/*****Animation */

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

/******Animation */



const Result = ({entries}) => {
  const dispatch = useDispatch();
  const relationName = findRelation(entries);

  /*** Animation */
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  // const fireWorkRef = React.useRef(null)
  const startFire = function (){
    // fireWorkRef.current.click()
  document.getElementById('fireWorkButton').click({});
  }

  /***Animation */

  return(
    <div>
    <div className="relative flex items-center max-w-md mx-auto mt-2 overflow-hidden rounded-full relation-timeline">
    <Timeline theme={customTheme} dateFormat='full'>
     <Container>
      <YearContent/>
      <BodyContent>
      {entries.length > 0 ? <Section title="Your"></Section> : null}
      {entries.map(({text}, index) => (
       <Section title={`${capitalizeFirstLetter(text)}${entries.length == index+1 ? '': "'s"}`} className="relation-timeline-section" style={{ FontSize: '10px' }}></Section>
      ))}
      {entries.length > 1 ? <Section title=""><div className="relation-result" style={{ 'color': '#bf9765' }}><p style={{ "text-align":"left", "float":"left" }}>is your <b className="animate-pulse text-green-500"><i>{relationName.toUpperCase()} !!</i></b> <Button id="share-button" className="inline-flex py-1 px-3 border text-white" onClick={() => {
      window.open(getWhatsAppClickToChatLink(generateWhatsAppSharingContent(entries, relationName)), '_blank');
  }} color="white" target="_blank">
    {/* <svg class="w-4 h-4 mr-2" style={{ "background":"white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
    <ShareIcon />
    <span>Share</span>
    </Button></p></div> </Section> : null}
      </BodyContent>
     </Container>
    </Timeline>
    </div>
    {entries.length > 1 ? <div className="relation-result hidden" style={{ 'color': '#bf9765' }}><p>is your <b className="animate-pulse text-green-500"><i>{relationName.toUpperCase()} !!</i></b> <Button id="share-button" className="inline-flex py-1 px-3 border text-white" onClick={() => {
      window.open(getWhatsAppClickToChatLink(generateWhatsAppSharingContent(entries, relationName)), '_blank');
  }} color="white" target="_blank">
    {/* <svg class="w-4 h-4 mr-2" style={{ "background":"white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
    <ShareIcon />
    <span>Share</span>
    </Button></p></div> : null}
    {entries.length == 1 ? <div className="relation-result text-green-500 animate-pulse"><p>{} Add one more relation to check !!</p></div> : null}
    <button id="fireWorkButton" onClick={fire}>Fire</button>
    <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    { entries.length > 0 ? startFire(): null }
    </div>
    );
    
//     return (
//       <div>
//         <div>
//           <p className="text-white">Yours</p>
//             {entries.map(({text}, index) => (
//                 <span key={uuid()}>
// <VerticalTimeline animate={false}>
//   <VerticalTimelineElement
//     position="right"
//     className="vertical-timeline-element--work"
//     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//    icon={<ClearIcon onClick={() => dispatch(removeEntry(index))}/>}
//   >
//     <h3 className="vertical-timeline-element-title">{text}</h3>
//   </VerticalTimelineElement>
//   </VerticalTimeline>
//           </span>
//             ))}
//         </div>
//         <div className="relation-result text-white">{relationName}</div>
//       </div>
//     );
};

export default Result;
