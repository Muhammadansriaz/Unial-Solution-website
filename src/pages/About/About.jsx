import React from 'react';
import './About.css'
import { Typography } from "@material-ui/core";
import CountUp from "react-countup";
import { VscSmiley } from 'react-icons/vsc';
import { BsJournalRichtext, BsHeadset, BsAward } from 'react-icons/bs'


const About = () => {
    return (
        <section id='about' className='about'>
            <div className='container aos-init aos-animate' data-aos="fade-up">
                <div className="section-title">
                    <h2>About</h2>
                    <p>
                        Full Stack Architect Level Web Developer, Mobile Application
                        Developer, Blockchain Developer, UI/UX Designer, Game Developer
                        and Continuous Innovation Consultant.
                    </p>
                </div>
            </div>

            <div className='both'>
                <div>
                    <img className='img-fluid' src='https://muhammadusman.unialsolutions.com/assets/img/Muhammad%20Usman.jpg'></img>
                </div>
                <div >
                    <h3>Full Stack Architect Level Programmer</h3>
                    <p>Web Developer, Mobile Application Developer, Blockchain Developer,</p>
                    <p> UI/UX Designer, Game Developer and Continuous Innovation Consultant.</p>
                    <div className='both'>
                        <div>
                            <ul>
                                <li className='both'>
                                    <strong>Experience :</strong>
                                    <span className='font'>9 Years</span>
                                </li>
                                <li className='both'>
                                    <strong>Website :</strong>
                                    <span className='font'>www.unialsolutions.com</span>
                                </li>
                                <li className='both'>
                                    <strong>Phone :</strong>
                                    <span className='font'>+92-301-3949480</span>
                                </li>
                                <li className='both'>
                                    <strong>City :</strong>
                                    <span className='font'>Remote</span>
                                </li>
                            </ul>
                        </div>
                        <div><ul>
                            <li className='both'>
                                <strong>type :</strong>
                                <span className='font'>Full Stack</span>
                            </li>
                            <li className='both'>
                                <strong>Degree :</strong>
                                <span className='font'>Master</span>
                            </li>
                            <li className='both'>
                                <strong>Email :</strong>
                                <span className='font'>M.Usman.fullstack@gmail.com</span>
                            </li>
                            <li className='both'>
                                <strong>Freelancer :</strong>
                                <span className='font'>Available</span>
                            </li>
                        </ul></div>

                    </div>
                    <p>I aim to empower individuals, small businesses, and corporate businesses to</p>
                    <p>overcome unemployment.</p>
                </div>

            </div>
            <div className='container aos-init aos-animate' data-aos="fade-up">
                <div className="section-title">
                    <h2 className='mt-5'>FACTS</h2>
                    <p>
                        Delivering best services, and making clients project successful is always remain my passion, I always ready to get job done, whatever hard and smart work it takes.
                    </p>
                </div>
            </div>
            <div className="Container">
                <div className="box">
                    <div className='count-box'>
                        <VscSmiley className='bi bi-emoji-smile' />
                        <span data-purecounter-start="0" data-purecounter-end="200" data-purecounter-duration="0" className="purecounter">
                            <CountUp
                                start={0}
                                end={200}
                                duration={6}
                                separator=","
                            />
                        </span>
                        <span>+</span>
                        <h5>Happy Clients</h5>

                    </div>
                </div>
                <div className="box">
                    <div className='count-box'>
                        <BsJournalRichtext className='bi bi-emoji-smile' />
                        <span data-purecounter-start="0" data-purecounter-end="12000" data-purecounter-duration="0" className="purecounter">        <CountUp
                            start={0}
                            end={12000}
                            duration={6}
                            separator=","
                        /></span>
                        <span>+</span>
                        <h5>Students Trained</h5>

                    </div>
                </div>
                <div className="box">
                    <div className='count-box'>
                        <BsHeadset className='bi bi-emoji-smile' />
                        <Typography>
                            <span data-purecounter-start="0" data-purecounter-end="20000" data-purecounter-duration="0" className="purecounter">
                                <CountUp
                                    start={0}
                                    end={20000}
                                    duration={6}
                                    separator=","
                                /> </span>
                        </Typography>
                        <span>+</span>
                        <h5>Hours of Support</h5>

                    </div>
                </div>
                <div className="box">
                    <div className='count-box'>
                        <BsAward className='bi bi-emoji-smile' />
                        <span data-purecounter-start="0" data-purecounter-end="9" data-purecounter-duration="0" className="purecounter">        <CountUp
                            start={0}
                            end={9}
                            duration={6}
                            separator=","
                        /></span>
                        <span>+</span>
                        <h5>Years of Experience</h5>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default About;