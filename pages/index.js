import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import pug from "../public/Images/data3.png";
import Android from "../public/Images/android.png";
import apple from "../public/Images/apple.png";
import Link from "next/link";
import couple from "../public/Images/couple.jpg"
import { FaUserPlus } from "react-icons/fa";
import {
  FcAssistant,
  FcLike,
  FcSurvey,
  FcConferenceCall,
} from "react-icons/fc";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
  require("materialize-css");
}

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Head>
        <title>ChatPug</title>
        <meta
          name="description"
          content="Serious about finding true love? so are we. Join our dating program and let us help you to find your destined ones."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 className={styles.title}> Welcome to ChatPug!</h1> */}

      <main className={styles.main}>
        <section style={{ width: "100%", marginTop: 30, marginBottom: 60 }}>
          <div className="row " style={{ width: "100%" }}>
            <div className="col s12 l6 m6 center" style={{paddingRight:60,paddingLeft:60}}>
              <div
                style={{
                  color: "#01caba",
                  fontFamily: "cursive"
                }}
              >
                <p style={{ fontsize: 18 }}>
                Chatpug is all about bringing people together through one-of-a-kind events and experiences that inspire connection and creativity. Whether you are an artist, a foodie, or just someone who loves trying new things, we have got something for you. Our events range from hands-on art and dance workshops to cooking classes, social meetups, and so much more. We aim to create a vibrant community where you can explore your passions, pick up new skills, and make meaningful connections in a fun and welcoming space.
                </p>
                <br />
                <p style={{ fontsize: 18 }}>
                What sets us apart is our commitment to curating truly unique gatherings. At Chatpug, every event is carefully designed to offer an experience you will not find anywhere else. Love art? Join us for a collaborative mural painting. Into food? Sign up for our international cooking series and learn recipes from around the globe. Even if you just want to unwind, our casual meetups and themed hangouts are perfect for making new friends and sharing laughs.
                </p>
                <br />
                {/* <p style={{ fontsize: 18 }}>
                We also believe in the power of learning and personal growth. Our workshops and classes are led by passionate experts who share their knowledge in a way that's both engaging and approachable. Whether you're stepping into a dance studio for the first time or diving into the world of mixology, our events make it easy and fun to discover new interests.
                </p> */}
                <p style={{ fontsize: 18 }}>
                Join us on this journey to celebrate life is small joys and big adventures. With Small World, you will discover a community that is as diverse and dynamic as the events we host. Lets make every moment count and turn every gathering into something unforgettable!
                </p>
                <br />
                <p style={{ fontsize: 24 }}>
                  You must be 18 years or older to use Chatpug. See our{" "}
                  <Link href="/termsandconditions">Terms of Service</Link> and{" "}
                  <Link href="/CommunityGuidelines">Community Guidelines</Link>{" "}
                  for more information.
                </p>
                <br />
                {/* <h4>Download ChatPug App today!</h4> */}
              </div>
            </div>
            <div className="col s12 l6 m6 center" style={{borderRadius:20}}>
                <div className="center" style={{overflow:'hidden',maxHeight:'600px',maxWidth:'700px',borderRadius:50}}>
                <Image src={couple} alt="chatpug" height={700} width={700} />
                </div>
            </div>
          </div>
        </section>
        {/* <section>
                <div className="whyContainer">
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
                            <p>We will find amazing date for you and schedule a beautiful dinner date. You just meet and talk.</p>
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
            </section> */}
        <section
          style={{
            backgroundColor: "#111",
            width: "100%",
            marginTop: 20,
            paddingBottom: 40,
            borderRadius: 20,
          }}
        >
          <div className="row container">
            <h3
              className={styles.headerText}
              style={{
                marginBottom: 40,
                marginTop: 40,
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            >
              ChatPug Mobile App
            </h3>
            <div className="col s12 l6 m6 center ">
              <div>
                <Image
                  src={Android}
                  alt="Snapwheels"
                  height={200}
                  width="250"
                ></Image>
                <h5 className="center" style={{ color: "#eee", fontSize: 20 }}>
                  Easy access on mobile app. Install our android mobile app to
                  start your dating journey.
                </h5>
                <a
                  className="btn large downloadButton"
                  style={{ marginTop: 20, marginBottom: 60, borderRadius: 20 }}
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.chatpug",
                      "_blank"
                    )
                  }
                >
                  DOWNLOAD ANDROID APP
                </a>
              </div>
            </div>
            <div className="col s12 l6 m6 center">
              <div className={styles.downloadBox}>
                <Image
                  src={apple}
                  alt="Snapwheels"
                  height={200}
                  width="200"
                ></Image>
                <h5 className="center grey-text" style={{ fontSize: 20 }}>
                  Sorry, we are not available in App store yet. Contact us to
                  register.
                </h5>
                <Link
                  className="btn large downloadButton"
                  href="/support"
                  style={{
                    marginTop: 20,
                    marginBottom: 60,
                    borderRadius: 20,
                    color: "#fff",
                  }}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
