import React, { useState, useEffect, useRef } from 'react';
import './TipBot.css';
import { Link } from 'react-router-dom';
import animation from "../assets/Animation - 1734348537988.gif";
import tipbotimg1 from "../assets/tipbotimg1.jpg";
import tipbotimg2 from "../assets/tipbotimg2.jpg";
import tipbotimg3 from "../assets/tipbotimg3.jpg";
import tipbotimg4 from "../assets/tipbotimg4.jpg";
import tipbotimg5 from "../assets/tipbotimg5.jpg";
import tipbotimg6 from "../assets/tipbotimg6.jpg";



const TipBot= () => {
  const snowflakeContainer = useRef(null);
  const tipbotData = [
    {
      title: 'Enhance Your Tipping Page with Premium Features',
      feature: 'TipBots provides a sleek, professional tipping page with advanced features to engage your audience and offer a variety of payment methods.',
      image: tipbotimg1
    },
    {
      title: 'Customize Your Tipping Page',
      feature: 'Make your tipping page uniquely yours by adding your native currency, uploading your branding, and setting custom amount presets.',
      image: tipbotimg2
    },
    {
      title: 'Real-Time Stream Alerts',
      feature: 'Celebrate with your community in real-time with customizable stream alerts, easily tailored to match your existing alerts using our widget designer.',
      image: tipbotimg3
    },
    {
      title: 'Engage and Monetize Effortlessly',
      feature: 'Enhance viewer engagement by allowing them to request songs or videos in exchange for tips. Turn your streams into interactive experiences.',
      image: tipbotimg4
    },
    {
      title: 'Keep Your Stream Clean and Safe',
      feature: 'Avoid disruptive messages from tipping trolls with our customizable message filtering. Say goodbye to inappropriate alerts and maintain a positive streaming environment.',
      image: tipbotimg5
    },
    {
      title: 'Multiple Payment Methods',
      feature: 'Cater to different preferences with a variety of secure payment options, ensuring everyone in your community can support you.',
      image: tipbotimg6
    }
  ];

  useEffect(() => {
    const container = snowflakeContainer.current;

    // Function to create a single snowflake
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      const size = Math.random() * 5 + 5; // Random size between 5px and 10px
      const position = Math.random() * window.innerWidth; // Random horizontal position
      const duration = Math.random() * 20 + 20; // Random falling duration (5-10 seconds)
      const swayDuration = Math.random() * 3 + 2; // Random sway duration (2-5 seconds)

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${position}px`;
      snowflake.style.animationDuration = `${duration}s, ${swayDuration}s`;

      container.appendChild(snowflake);

      // Remove snowflake after animation ends
      setTimeout(() => {
        container.removeChild(snowflake);
      }, duration * 9000);
    };

    // Generate snowflakes continuously
    const interval = setInterval(createSnowflake, 200);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className='snowflake-container' ref={snowflakeContainer}>
      <div className='tipContainer'>
        <div className='down'>
          <h1>Introducing TipBots</h1>
          <h3>Your Free Tipping Solution
          for Content Creators</h3>
          <button className='tipButton'>Setup TipBot</button>
        </div>
        <div className='tipimgcont'><img className='tipImage' src={animation} alt="" /></div>
      </div>
      <div className="tipbot-container">
      {tipbotData.map((item, index) => (
        <div
          key={index}
          className="tipbot-feature-section"
          style={{ animationDelay: `${index * 1}s` }}
        >
          <div className="tipimgcont2">
            <img className='tipImage'
            src={item.image} 
            />
          </div>
          <h1>{item.title}</h1>
          <h5>{item.feature}</h5>
          
        </div>
      ))}
    </div>
    <div className='bitpay'>
      <div className="reachMoreViewersWrap multiStreamingGetStarted alignCenter">
        <div className="reachMoreText text-start">BunnyPay</div>
        <h4 className="multiStreamingGetStartedText text-center">
          Our in-house payment method, BunnyPay, lets your community pay with credit
          cards or various local payment methods available in their regions.
        </h4>
      </div>
      <div className="reachMoreViewersWrap multiStreamingGetStarted alignCenter">
        <div className="reachMoreText text-start">PayPal</div>
        <h4 className="multiStreamingGetStartedText text-center">
        Trusted and widely used, PayPal offers a convenient checkout process for users with
        existing accounts.
        </h4>
      </div>
      <div className="reachMoreViewersWrap multiStreamingGetStarted alignCenter">
        <div className="reachMoreText text-start">BitCoin</div>
        <h4 className="multiStreamingGetStartedText text-center">
        Leverage Blockonomics, a decentralized Bitcoin payment solution, to facilitate direct
        Bitcoin transactions. Enhance your existing wallets, issue anonymous invoices, and accept
        Bitcoin seamlessly.
        </h4>
      </div>
    </div>
    
    
    <h1 className='text-center'>Meet BunnyPay: Your Ultimate Tipping Solution</h1>
      
      
      <div className='tipSecion'> 
        <div className='tip-text fade-section'>
          <div className='tipIcon reachMoreText text-start'>✓</div>
          <div className='tipTitle'>Advanced Chargeback Protection</div>
        </div>
          <div className='tipDescription fade-section'>Why should you pay for trolling? BunnyPay covers 100% of your chargeback fees from malicious transactions.</div>
        <div className='tip-text fade-section'>
          <div className='tipIcon reachMoreText text-start'>✓</div>
          <div className='tipTitle'>No Chargeback Fees</div>
        </div>
          <div className='tipDescription fade-section'>We auto-block known malicious tippers, ensuring you won't face repeat chargeback offenders.</div>
        <div className='tip-text fade-section'>
          <div className='tipIcon reachMoreText text-start'>✓</div>
          <div className='tipTitle'>More Payment Options</div>
        </div>
          <div className='tipDescription fade-section'>BunnyPay supports tips via credit cards and local payment methods, offering your community more ways to support you.</div>
        <div className='tip-text fade-section'>
          <div className='tipIcon reachMoreText text-start'>✓</div>
          <div className='tipTitle'>Expanding Reach</div>
        </div>
          <div className='tipDescription fade-section'>BunnyPay is available in 15 countries, with more being added continuously.</div>
      </div>

      <div className="reachMoreViewersWrap multiStreamingGetStarted alignCenter">
        <h4 className="multiStreamingGetStartedText text-center">
        Simplify Tipping with BunnyPay for creators
        </h4>
        <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
          <Link to={"/signUp"}>
              <button className="reachMoreBtn purpleHover">Sign up now</button>
          </Link>
        </div>
      </div>
      
    </div>
    
  );
};

export default TipBot;
