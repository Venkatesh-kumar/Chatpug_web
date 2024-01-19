
import React from 'react'
import styles from '../styles/MMPstyles.module.css'
import $ from 'jquery';
import { FaUserPlus } from "react-icons/fa";
import { FcAssistant,FcLike, FcSurvey, FcConferenceCall } from "react-icons/fc";

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}

 const meetmypug = () => {
    return (

    <div>
        <main style={{backgroundColor:'black'}}>
        <section>
            <div className="bannercontainer">
            <div className={styles.bgimage}></div>
            </div>
        </section>
        <section>
            <div className="welcomeContainer container">
            <h3 className={styles.welcomeText}>Welcome to ChatPug's Dating Program!</h3>
            </div>
        </section>
        <section>
            <div className="whyContainer container">
            <h3 className={styles.headerText}>How it works?</h3>
            <div className="row">
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 1</h2>
                        <FaUserPlus size={120} color='#F4C724'></FaUserPlus>
                        <p>Register with us as a first step to meet your amazing handpicked dates.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 2</h2>
                        <FcAssistant size={120} color='#53E0BC'></FcAssistant>
                        <p>Our executive will call you will all details and assist you with all your queries.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 3</h2>
                        <FcConferenceCall size={120} color='#F4C724'></FcConferenceCall>
                        <p>Upon clearing our screening test, you are all set to join ChatPug dating program.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 4</h2>
                        <FcLike size={120} color='#F4C724'></FcLike>
                        <p>We will find amzing date for you and schedule a beautiful dinner date. You just meet and talk.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 5</h2>
                        <FcSurvey size={120} color='#F4C724'></FcSurvey>
                        <p>We will collect and share the feedback about your date so that your next date will be smoother.</p>
                    </div>
                </div>
                
            </div>
            </div>
        </section>
        <section>
            <div className="whyContainer container">
            <h3 className={styles.headerText}>Register Here</h3>
        
            </div>
        </section>
        <style jsx>
              {`
                .bannercontainer{
                    max-width:100%;
                    margin: 0 auto;
                    padding-bottom: 50px;
                }
                .bigHeader{
                    background-color: #009387;
                    padding:10px;
                    color:white;
                    font-weight:bold
                }
                .downloadBoxText{
                  margin-top: 50px;
                  margin-bottom: 50px;
                }
                .whyContainer{
                  background-color: black;
                  padding-top: 20px;
                  padding-bottom: 20px;
                }
                .welcomeContainer{
                    background-color: #008397;
                    padding-top: 40px;
                    padding-bottom: 40px;
                    border-radius: 20px
                  }
              `}
            </style>
            </main>
    </div>
    )
}

export default meetmypug;