import React, { useRef } from 'react';
import headshot from './resources/headshot.jpg';
import { Button, Chip, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const PageLayoutWidescreen = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-rows: min-content 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "header header"
    "welcome welcome"
    "headshot name-blurb"
    "about-me about-me"
    "education education"
    "services services;
    "areas-of-support areas-of-support"
    "fees" "fees"
    "email-me" "email-me";
  padding: 8px;
  overflow: hidden;
`;


function App() {

  // const aboutRef = useRef();

  // function handleClickAbout() {
  //   aboutRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <PageLayoutWidescreen className="App">
      <div style={{gridArea: "header"}}>
        <Typography>Peacock Well Being</Typography>
        <Button>About Me</Button>
        <Button>Services</Button>
        <Button>Request Appointment</Button>
      </div>
      <div style={{gridArea: "welcome", justifyContent: "center"}}>
      <Typography variant='h1' className="App-header">
        Peacock Well Being
      </Typography>
      <Typography variant='h2' className="App-header">
        Psychotherapy
      </Typography>
      </div>
      <div style={{display: "grid", gridArea: "headshot"}}>
        <img src={headshot} alt="headshot of Caroline Peacock"/>
      </div>
      <div style={{display: "grid", gridArea: "name-blurb"}}>
        <Typography variant="h3">Caroline Peacock</Typography>
        <Typography variant="subtitle1">LSCW, MDiv, ACPE, APC</Typography>
        <Typography variant="subtitle1">License LCSW Georgia 005306</Typography>
      </div>
      <div style={{display: "grid", gridArea: "about-me"}}>
        <Typography variant="h5">About me and my approach</Typography>
        <Typography variant="body1">I have a deep love for helping people learn more about themselves on their path to healing and wholeness. I have over 20 years of professional experience in healing fields- as a licensed clinical social worker \(therapist\), minister, spiritual health practitioner/educator, and meditation teacher. I utilize these fields and influences to offer holistic care. I utilize a client-centered approach, building on the strengths present and underlying in the persons I support. I believe that people have within them what they need to grow, and through our work together we will focus on removing barriers to help these elements come forward. I have an expansive understanding and appreciation of spirituality and support people based on their particular values. I utilize contemplative practices, like meditation, when helpful to clients. I also draw from emotion-based, cognitive, and experiential modalities. I believe that warmth and good relationship are critical to the therapeutic process. </Typography>
      </div>
      <div style={{display: "grid", gridArea: "education"}}>
        <Typography variant="h5">Education</Typography>
        <Typography variant="body1">
        I have a Master of Social Work from Hunter College School of Social Work and am a Licensed Clinical Social Worker. I have a Master of Divinity from General Theological Seminary and am ordained as a priest in the Episocal Church. I am an ACPE Certified Educator \(certified to train chaplains/spiritual health practitioners\), and am board certified through the Association of Professional Chaplains. I am a CBCT™️ (Cognitively Based Compassion Training) teacher. I have a certificate in Psychedelic Assisted Therapy from Naropa University. 
        </Typography>
      </div>
      <div style={{display: "grid", gridArea: "services"}}>
        <Typography variant="h5">Types of services</Typography>
        <Typography variant="body1"><Chip label="Individual, couples, and group psychotherapy"/> <Chip label="Workplace team support"/> <Chip label="Virtual or in person"/></Typography>
      </div>
      <div style={{display: "grid", gridArea: "areas-of-support"}}>
        <Typography variant="h5">Areas of support</Typography>
        <Typography variant="body1">
          <Chip label="Life transitions"/>
          <Chip label="trauma"/>
          <Chip label="LGBTQ identity"/>
          <Chip label="parenting"/>
          <Chip label="depression"/>
          <Chip label="anxiety"/>
          <Chip label="work/life balance"/>
          <Chip label="workplace wellness for teams"/>
          <Chip label="emotional well-being"/>
        </Typography>
      </div>
      
    </PageLayoutWidescreen>
  );
}

export default App;
