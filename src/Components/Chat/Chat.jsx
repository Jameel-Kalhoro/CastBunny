import React, { useState } from "react";
import "./Chat.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Tabs, Tab, Container } from 'react-bootstrap';



const Chat = () => {
  const [key, setKey] = useState('promote');
  const cardData = [
    {
      feature: "Feature 1",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nulla, molestias earum reprehenderit error vitae inventore illum quam qui odit harum, recusandae explicabo veniam similique debitis quos reiciendis fuga tempore.",
    },
    {
      feature: "Feature 2",
      details:
        "Lorem ipsum dolor sit amet consectetur. Odio tortor varius euismod volutpat enim non habitant vulputate. Sed mollis eleifend mauris.",
    },
    {
      feature: "Feature 3",
      details:
        "Lorem ipsum dolor sit amet consectetur. Odio tortor varius euismod volutpat enim non habitant vulputate. Sed mollis eleifend mauris.",
    },
    {
      feature: "Feature 4",
      details:
        "Lorem ipsum dolor sit amet consectetur. Odio tortor varius euismod volutpat enim non habitant vulputate. Sed mollis eleifend mauris.",
    },
  ];

  const data = {
    promote: [
      { feature: "Interactive Polls", details: "Engage your audience with live polls and get instant feedback." },
      { feature: "Automated Moderation", details: "Filter inappropriate comments with advanced moderation tools." },
      { feature: "Custom Emojis", details: "Personalize your chat with branded emojis to reflect your style." },
      { feature: "Live Reactions", details: "Allow users to react with live emojis during broadcasts, increasing engagement." },
    ],
    moderateChat: [
      { feature: "Spam Filters", details: "Prevent spam messages from cluttering your chat seamlessly." },
      { feature: "Profanity Blocker", details: "Maintain a professional tone with automated content filtering." },
      { feature: "User Bans", details: "Easily remove disruptive users to ensure a safe environment." },
      { feature: "Report System", details: "Enable users to report inappropriate behavior for further review." },
    ],
    turnFollowers: [
      { feature: "Loyalty Badges", details: "Reward loyal followers with unique badges in your community." },
      { feature: "Community Challenges", details: "Foster collaboration with fun challenges for your community." },
      { feature: "Exclusive Content", details: "Offer exclusive content to your fans for increased loyalty." },
      { feature: "Fan Recognition", details: "Highlight top followers and contributors to strengthen community bonds." },
    ],
  };

  const renderCards = (sectionData) => {
    return (
      <div className="swiperWrap">
        <Swiper
          
          modules={[Navigation]}
          slidesPerView={3}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {sectionData.map((card, index) => (
            <SwiperSlide key={index} className="chatPromotionCardWrap">
              <div className="chatPromotionCard d-flex flex-column justify-content-center align-items-center text-center">
                <div className="chatFeatureLogo"></div>
                {card.feature && <div className="chatPromotionFeature">{card.feature}</div>}
                {card.details && <div className="chatPromotionFeatureDetails">{card.details}</div>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  


  return (
    <div className="chatWrap">
      <div className="promotionalVideo">
        <div className="promotionalVideoWatermark d-flex justify-content-start">
          Promotional Video
        </div>
        <div className="promotionalVideoMainDiv d-flex  flex-column justify-content-center align-items-center text-center">
          <div>YOUR OWN STREAMING CHATBOX</div>
          <p>
            Take your chat to the next level with a comprehensive & highly
            customizable set of chat tools
          </p>
          <button>Activate now</button>
        </div>
        <div className="promotionalVideoWatermark d-flex justify-content-end">
          Promotional Video
        </div>
      </div>

      <div className="chatJumpstart d-flex flex-column justify-content-center align-items-center">
        <div>Jumpstart your chat. Let the hype flow</div>
        <p>
          With over 11 fun interactive modules and mini-games, StreamElements
          chatbot will give life to your chat
        </p>
        <button>Activate now</button>
      </div>

      <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="custom-tabs"
      >
        <Tab eventKey="promote" title="Promote Engagement">
          <div className="chatPromotion">
            <div className="chatPromotionHeading text-center">Promote engagement and interactivity</div>
            {renderCards(data.promote)}

            <div className="chatEngage d-flex flex-column justify-content-center align-items-center text-center">
              <p>Keep your chat active and engaged with a variety of interactive and automated tools.</p>
              <button>Activate now</button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="moderateChat" title="Moderate Chat">
          <div className="chatPromotion">
            <div className="chatPromotionHeading text-center">Moderate Your Chat. Protect Your Reviewers</div>
            {renderCards(data.moderateChat)}

            <div className="chatEngage d-flex flex-column justify-content-center align-items-center text-center">
              <p>Ensure a safe and positive experience for everyone in your chat.</p>
              <button>Activate now</button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="turnFollowers" title="Turn Followers into Fans">
          <div className="chatPromotion">
            <div className="chatPromotionHeading text-center">Turn followers into fans. Build a community</div>
            {renderCards(data.turnFollowers)}

            <div className="chatEngage d-flex flex-column justify-content-center align-items-center text-center">
              <p>Engage your followers and build a strong community of fans.</p>
              <button>Activate now</button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>

      <div className="promotionalVideo">
        <div className="promotionalVideoWatermark d-flex justify-content-start">
          Promotional Video
        </div>
        <div className="promotionalVideoMainDiv d-flex  flex-column justify-content-center align-items-center text-center">
          <div>YOUR OWN STREAMING CHATBOX</div>
          <p>
            Take your chat to the next level with a comprehensive & highly
            customizable set of chat tools
          </p>
          <button>Activate now</button>
        </div>
        <div className="promotionalVideoWatermark d-flex justify-content-end">
          Promotional Video
        </div>
      </div>
      <div className="reachMoreViewersWrap pricingCTA ">
        <div className="reachMoreText text-start">Get Started today!</div>
        <h4 className="pricingCTAText text-center">
          Experience the satisfaction of reaching more viewers with CastBunny.
          <br />
          Try it for free today!
        </h4>
        <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
          <Link to={"/signUp"}>
            <button className="reachMoreBtn">Sign up now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chat;
