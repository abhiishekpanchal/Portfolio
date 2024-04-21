'use client'
import React from 'react';
import './child.css';
import { SectionWrapper } from "./hoc";


const Experience = () => {
  return (
    <div>
      <div className='heading'>
        <h4 className='subtitle'>WORK HISTORY</h4>
        <h1 className='title'>Experience.</h1>
      </div>
      <section id="timeline">
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: 'url(https://placeimg.com/801/801/nature)' }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Jan 2024</p>
          </div>
          <div className="tl-content">
            <h1>Organizing Head in Kshitij</h1>
            <p>As Sports Secretary, spearheaded the organization of IIITN's annual sports event, Kshitij, securing
               sponsorships from Domino's, RedBull, and Max Protein, thereby enhancing my leadership, event management, 
               negotiation, and communication skills while fostering teamwork and collaboration.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: 'url(https://placeimg.com/802/802/nature)' }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Oct 2023</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Lead Organizer of Hackathon in TantraFiesta</h1>
            <p>Organized a successful hackathon at TantraFiesta 2022 with participation from 400 colleges, fostering
               innovation, collaboration, and the exhibition of students’ technical prowess and creativ</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: 'url(https://placeimg.com/803/803/nature)' }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">Feb 2023</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Management Lead of Abhivyakti</h1>
            <p>As the management lead for IIITN's annual cultural fest, successfully organized an event
               drawing participants from across India and industry luminaries as chief guests, thereby refining
               skills in event planning, logistics management, team coordination, negotiation, and communication.</p>
          </div>
        </div>

        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: 'url(https://placeimg.com/800/800/nature)' }}></div>
          <div className="tl-year">
            <p className="f2 heading--sanSerif">July 2018</p>
          </div>
          <div className="tl-content">
            <h1 className="f3 text--accent ttu">Event Management Member in Indore World Summit</h1>
            <p>Contributed to the seamless organization and execution of the event which has participation
               from over 20+ cities which demonstrates the leadership, teamwork, and constructive diplomatic discourse among
               participants.</p>
          </div>
        </div>
      
      </section>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
