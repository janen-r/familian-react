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

/** Stepper */

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

/** Stepper */

import Typist from 'react-typist';

 const customTheme = {
  lineColor: '#d0cdc4',
  dotColor: '#262626',
  borderDotColor: '#d0cdc4',
  titleColor: '#bf9765',
  subtitleColor: '#bf9765',
  // textColor: '#262626',
 };


const Result = ({entries}) => {
  const dispatch = useDispatch();
  const relationName = findRelation(entries);

  return(
    <div>
    <div className="relative flex items-center max-w-md mx-auto mt-2 rounded-full relation-timeline">
   
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={4} orientation="vertical">
      {entries.length > 0 ? <Step key={"Your"} completed={true}>
            <StepLabel><div className="text-white" style={{ "fontSize":"21.5px" }}>Your</div>
            </StepLabel>
      </Step> : null }
        {entries.map((step, index) => (
          <Step key={step.text} completed={true}>
            <StepLabel>
            <div className="arrow-steps clearfix">
            <div className="step current"> <span> {`${capitalizeFirstLetter(step.text)}${entries.length == index+1 ? '': "'s"}`}</span> </div>
            </div>
            </StepLabel>
          </Step>
        ))}
        {entries.length > 1 ? <Step key={"Result"} completed={true}>
            <StepLabel>
            <div className="arrow-steps-result clearfix">
            <div className="step current animate-bounce"> <span>is your <b className=""><i><Typist.Delay ms={1250} />{relationName.toUpperCase()} !!</i></b></span> </div>
            </div> 
            <div><Button id="share-button" className="inline-flex py-1 px-3 border text-white" onClick={() => {
 window.open(getWhatsAppClickToChatLink(generateWhatsAppSharingContent(entries, relationName)), '_blank');
}} color="white" target="_blank">
<ShareIcon />
<span>Share</span>
</Button></div>
            </StepLabel>
      </Step> : null }
      </Stepper>
    </Box>

    </div>
    {entries.length == 1 ? <div className="relation-result text-green-500 animate-pulse"><p>{} Add one more relation to check !!</p></div> : null}
    </div>
    );
  
};

export default Result;


/**Timeline */

// <Timeline theme={customTheme} dateFormat='full'>
// <Container>
//  <YearContent/>
//  <BodyContent>
//  {entries.length > 0 ? <Section title="Your"></Section> : null}
//  {entries.map(({text}, index) => (
//   <Section title={`${capitalizeFirstLetter(text)}${entries.length == index+1 ? '': "'s"}`} className="relation-timeline-section" style={{ FontSize: '10px' }}></Section>
//  ))}
//  {entries.length > 1 ? <Section title=""><div className="relation-result" style={{ 'color': '#bf9765' }}><p style={{ "text-align":"left", "float":"left" }}>is your <b className="animate-pulse text-green-500"><i>{relationName.toUpperCase()} !!</i></b> <Button id="share-button" className="inline-flex py-1 px-3 border text-white" onClick={() => {
//  window.open(getWhatsAppClickToChatLink(generateWhatsAppSharingContent(entries, relationName)), '_blank');
// }} color="white" target="_blank">
// {/* <svg class="w-4 h-4 mr-2" style={{ "background":"white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
// <ShareIcon />
// <span>Share</span>
// </Button></p></div> </Section> : null}
//  </BodyContent>
// </Container>
// </Timeline>

/**Timeline */