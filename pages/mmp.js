
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




 

const handleUserNameChange = () =>{
    
}
 const meetmypug = () => {
    return (

    <div>
        <main style={{backgroundColor:'black'}}>
        {/* <section>
            <div className="bannercontainer">
            <div className={styles.bgimage}></div>
            </div>
        </section> */}
        <section>
            <div className="welcomeContainer container">
            <h3 className={styles.welcomeText}>Welcome to ChatPug Dating Program!</h3>
            </div>
        </section>
      
        <section>
            <div className="whyContainer container">
                    <h3 className={styles.headerText}>Register Here</h3>
                    <div className="input-field col l4 m12 s12">
                        <input id="user_name" type="text" className="validate"></input>
                        <label htmlFor="user_name">Enter Your Name</label>
                    </div>    
                    <div className="input-field col l6 m6 s12">
                        <input id="user_name" type="text" className="validate"></input>
                        <label htmlFor="user_name">Enter Your Mobile Number</label>
                    </div>   
                    <div className="row center" style={{paddingTop:'40px'}}>
                        <button className="btn btn-outline-primary waves-effect waves-light " type="button" >Register</button>
                    </div> 
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
                  padding-bottom: 160px;
                  width: 80%
                }
                .welcomeContainer{
                    background-color: #111;
                    padding-top: 40px;
                    padding-bottom: 40px;
                    border-radius: 20px;
                    
                  }
              `}
            </style>
        </main>
    </div>
    )
}

export default meetmypug;