
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import Head from "next/head";

export default function Layout({children}){
    return(
        <>
        <Navbar />
        <div>
            <Head>

                <meta name="theme-color" content="#01caba"/>
                <meta name="msvalidate.01" content="F6DE7074B46F9AD4D0FA9A2775CB1232" />
                
                <meta property="og:title" content="Chatpug: Text and Video chat with strangers."/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.chatpug.com/" />
                <meta property="og:image" content="https://www.snapwheels.online/_next/static/media/model.f4eb9f3d.png" />
                <meta property="og:description" content="Meet and talk with strangers anonymously. Chatpug matches you with one of the cool people in internet for one-to-one text or video chat. " />
                <meta property="og:image:width" content="1200px" />
                <meta property="og:image:height" content="630px" />
               
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ImSnapwheels"/>
                <meta name="twitter:title" content="Rent bikes in Bangalore and 40+ other cities!" />
                <meta name="twitter:description" content="Get a well maintained bike from the most trusted bike rentals in India!" />
                <meta name="twitter:image:src" content="https://www.snapwheels.online/_next/static/media/model.f4eb9f3d.png" />
                
                <title>Chatpug: Text and Video chat with strangers.</title>
                <meta name="description" content="Meet and talk with strangers anonymously. Chatpug matches you with one of the cool people in internet for one-to-one text or video chat." />
                <meta name="keywords" content="chatpug, random, strangers, videochat, livecam, social " />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3" />
                <meta charset="utf-8" /> 
                <meta name="turbolinks-cache-control" content="no-cache" />
                <meta name="robots" content="noydir" />
                <meta name="robots" content="noodp" />
                <link rel="canonical" href="https://www.chatpug.com" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googleadservices.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
                <link rel="dns-prefetch" href="https://d3vp2rl7047vsp.cloudfront.net" />
                <link rel="dns-prefetch" href="https://img.youtube.com" />

                <title>Chatpug: Text and Video chat with strangers! </title>
                <meta name="description"  key="desc" content="Meet and talk with strangers anonymously. Chatpug matches you with one of the cool people in internet for one-to-one text or video chat." />
                <link rel="icon" href="/favicon.ico" />
                
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
            </Head>
            <main >
                {children}
            </main>
        </div>
        <Fotter />
        </>
    )
};