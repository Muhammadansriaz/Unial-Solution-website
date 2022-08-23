import React from 'react';
import './Skills.css'

const Analytics = () => {
    return (
        <div>
            <div className='container aos-init aos-animate' data-aos="fade-up">
                <div className="section-title">
                    <h2 className='mt-5'>SKILLS</h2>
                    <p>
                        Certified full stack, React Native, ReactJS, Blockchain, Nodejs, Solidity, TypeScript, Unity3d, Unreal Engine, Laravel, Web App, Mobile App Developer, Consultant and Expert in Metaverse, Ico,Ieo and Ido Launch, Continuous Innovation Consultant.
                    </p>
                </div>
            </div>

            <div className='skills-content'>
                <div className='col-lg-6'>
                    <div className="progress">
                    <span className="skill">React Native <i className="val">100%</i></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>
                 <div className="progress">
                    <span className="skill">REACT JS <i className="val">100%</i></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>
                 <div className="progress">
                    <span className="skill">NODEJS <i className="val">100%</i></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>
                 <div className="progress">
                    <span className="skill">UNITY3D <i className="val">100%</i></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>

                </div>
                <div className='col-lg-6'>
                <div className="progress">
                    <span className="skill">LARAVEL <i className="val">100%</i></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>
                 <div className="progress">
                    <span className="skill">TYPESCRIPT <i className="val">100%</i></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>
                 <div className="progress">
                    <span className="skill">RBLOCKCHAIN <p className="val">100%</p></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>
                 <div className="progress">
                    <span className="skill">SOLIDITY <i className="val">100%</i></span>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                 </div>
                </div>

            </div>
        </div>
    );
};

export default Analytics;