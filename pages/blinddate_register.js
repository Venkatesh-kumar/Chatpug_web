import React from "react";
import Image from "next/image";
import apple from "../public/Images/qr.jpg";
import Link from "next/link";

export default function blinddate_register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{backgroundColor:'#000'}}>
      <div className="max-w-4xl w-full h-[600px]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdF-XdAy1Sxr4ClzVBfcTcye5XevpArZWYlnNIEwau0ftizcg/viewform?embedded=true"
          width="100%"
          height="1663"
          className="rounded-lg shadow-lg"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

