
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
                
                <meta property="og:title" content="Chatpug: Mordern Dating application for singles looking for something meaningful."/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.chatpug.com/" />
                <meta property="og:description" content="Serious about finding true love? so are we. Join our dating program and let us help you to find your destined ones. " />
               
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Chatpug_com"/>
                <meta name="twitter:title" content="Mordern Dating application for singles looking for something meaningful." />
                <meta name="twitter:description" content="Serious about finding true love? so are we. Join our dating program and let us help you to find your destined ones." />
    
                
                <title>Chatpug: Mordern Dating application for singles looking for something meaningful.</title>
                <meta name="description" content="Serious about finding true love? so are we. Join our dating program and let us help you to find your destined ones." />
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

                <title>Chatpug: Mordern Dating application for singles looking for something meaningful. </title>
                <meta name="description"  key="desc" content="Serious about finding true love? so are we. Join our dating program and let us help you to find your destined ones." />
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