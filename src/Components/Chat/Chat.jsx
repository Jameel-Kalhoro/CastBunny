import React from "react";
import "./Chat.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const Chat = () => {
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

      <div className="chatPromotion">
        <div className="chatPromotionHeading text-center ">
          Promote engagement and interactivity
        </div>

        <div className="swiperWrap">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            //   loop={true}
            navigation={true}
            breakpoints={{
              640: {
                // Screen width >= 640px (tablet and above)
                slidesPerView: 2, // Show 2 slides at a time
                spaceBetween: 15,
              },
              1024: {
                // Screen width >= 1024px (desktop)
                slidesPerView: 3, // Show 3 slides at a time
                spaceBetween: 20,
              },
              1440: {
                // Screen width >= 1024px (desktop)
                slidesPerView: 3, // Show 3 slides at a time
                spaceBetween: 20,
              },
              0: {
                // Screen width < 640px (mobile)
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className="chatPromotionCardWrap">
                <div className="chatPromotionCard d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="chatFeatureLogo"></div>
                  <div className="chatPromotionFeature">{card.feature}</div>
                  <div className="chatPromotionFeatureDetails">
                    {card.details}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="chatEngage d-flex flex-column justify-content-center align-items-center text-center ">
          <p>
            Keep your chat active and engaged with a variety of interactive and
            automated tools.
          </p>
          <button>Activate now</button>
        </div>
      </div>

      {/* Moderate Your Chat */}

      <div className="chatPromotion">
        <div className="chatPromotionHeading text-center ">
          Moderate Your Chat. Protect Your Reviewers
        </div>

        <div className="swiperWrap">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            //   loop={true}
            navigation={true}
            breakpoints={{
              640: {
                // Screen width >= 640px (tablet and above)
                slidesPerView: 2, // Show 2 slides at a time
                spaceBetween: 15,
              },
              1024: {
                // Screen width >= 1024px (desktop)
                slidesPerView: 3, // Show 3 slides at a time
                spaceBetween: 20,
              },
              0: {
                // Screen width < 640px (mobile)
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className="chatPromotionCardWrap">
                <div className="chatPromotionCard d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="chatFeatureLogo"></div>
                  <div className="chatPromotionFeature">{card.feature}</div>
                  <div className="chatPromotionFeatureDetails">
                    {card.details}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="chatEngage d-flex flex-column justify-content-center align-items-center text-center ">
          <p>
            Keep your chat active and engaged with a variety of interactive and
            automated tools.
          </p>
          <button>Activate now</button>
        </div>
      </div>

      {/* Turn followers into fans. Build a community */}

      <div className="chatPromotion">
        <div className="chatPromotionHeading text-center ">
          Turn followers into fans. Build a community
        </div>
        <div className="swiperWrap">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            //   loop={true}
            navigation={true}
            breakpoints={{
              640: {
                // Screen width >= 640px (tablet and above)
                slidesPerView: 2, // Show 2 slides at a time
                spaceBetween: 15,
              },
              1024: {
                // Screen width >= 1024px (desktop)
                slidesPerView: 3, // Show 3 slides at a time
                spaceBetween: 20,
              },
              0: {
                // Screen width < 640px (mobile)
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className="chatPromotionCardWrap">
                <div className="chatPromotionCard d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="chatFeatureLogo"></div>
                  <div className="chatPromotionFeature">{card.feature}</div>
                  <div className="chatPromotionFeatureDetails">
                    {card.details}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="chatEngage d-flex flex-column justify-content-center align-items-center text-center ">
          <p>
            Keep your chat active and engaged with a variety of interactive and
            automated tools.
          </p>
          <button>Activate now</button>
        </div>
      </div>

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
        <div className="reachMoreText text-center">Get Started today!</div>
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
