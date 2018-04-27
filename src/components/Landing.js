import React from 'react';
import SlideShow from './SlideShow.js';
import SimpleSlider from "./SlideShow";

import { db } from '../firebase';


const LandingPage = (props) =>
  <div>
    <h1>Landing Page</h1>
      <SimpleSlider></SimpleSlider>
    <p>{props.username}</p>
    <button onClick={() => db.addGame("uXmyjoTT1obpLaEf0XPZcVnOeV02", "tomorrow", "11:00", "2", "soccer", "here", "now", 3)}>Add Game</button>
    <button onClick={() => db.joinGame("-LB3HDCRl7LnPXfU1SrY", "rXshDS35S3QEnwUDBKAQq36rOBL2", "now")}>Join</button>
    <button onClick={() => db.leaveGame("-LB3HDCRl7LnPXfU1SrY", "rXshDS35S3QEnwUDBKAQq36rOBL2")}>Leave</button>
    <button onClick={() => db.removeGame("-LB3HDCRl7LnPXfU1SrY")}>Remove</button>
  </div>

export default LandingPage;