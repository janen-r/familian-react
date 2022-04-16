import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import uuid from 'react-uuid'
import ClearIcon from '@mui/icons-material/Clear';
import {removeEntry, toggleEntryDone} from "../../features/todoSlice";
import {useDispatch} from "react-redux";
import { findRelation } from "../../common/common";
import { capitalizeFirstLetter } from "../../common/common";
import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
 } from 'vertical-timeline-component-react';
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
  
  console.log(relationName, 'relationName------');
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
      </BodyContent>
     </Container>
    </Timeline>
    </div>
    {entries.length > 1 ? <div className="relation-result text-green-500"><p>is your <b><i>{relationName.toUpperCase()}</i></b> !!</p></div> : null}
    {entries.length == 1 ? <div className="relation-result text-green-500"><p>{} Add one more relation to check !!</p></div> : null}
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
