// About.js
import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        <h1 className="page-title">About Us</h1>
        <div className="section welcome-section">
          <p className="text">
            Welcome to Innerman Pre and Primary School, a place where education meets spiritual growth. Founded by the late Bishop Sefuma Steven, who left a lasting legacy upon his passing in 2021, our school continues his vision under the guidance of Bishop JL Serumaga, the current Overseer and Pastor of United Christian Center, Makerere. Bishop Serumaga is supported by a dedicated team of Pastors, Elders, Deacons, and Administrators, all committed to carrying forward the work of God in the Innerman Ministry.
          </p>
          <p className="text">
            Located in Kasubi, just a few meters from United Christian Church, our school provides both boarding and day school options for children of all ages. We are proud to have Mrs. Lukoma Catherine as our Head Teacher, with Mr. Ainebyona Samuel serving as the Deputy Head Teacher. Together with our passionate team of educators, they ensure that every pupil receives the highest quality of education.
          </p>
          <p className="text">
            At Innerman Pre and Primary School, we place a strong emphasis on the spiritual and moral development of our students. Our daily routine includes morning prayers before lessons begin for day pupils and nightly prayers for our boarders, guided by our caring matrons. We believe that fostering a strong spiritual foundation is key to nurturing well-rounded individuals.
          </p>
          <p className="text">
            Our commitment to discipline and spiritual upbringing is reflected in our daily services and prayer sessions, helping our students grow not just academically, but also in faith and character. We invite you to join us in this journey of learning and spiritual growth.
          </p>
        </div>
        <div className="section motto-section">
          <h2 className="title">Our Motto</h2>
          <p className="text">Grow In Stature, Wisdom And Spirit</p>
        </div>
        <div className="section vision-section">
          <h2 className="title">Vision</h2>
          <p className="text">A joyful and prosperous generation standing for the truth and integrity.</p>
        </div>
        <div className="section mission-section">
          <h2 className="title">Mission</h2>
          <p className="text">To raise a God-fearing generation through a holistic quality education.</p>
        </div>
        <div className="section values-section">
          <h2 className="title">Core Values</h2>
          <ul className="values-list">
            <li>God-fearing</li>
            <li>Bible-Centred</li>
            <li>Integrity</li>
            <li>Teamwork</li>
            <li>Accountability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
