import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OTT.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import obj1 from "../assets/ott.svg";
import img1 from "../assets/sliderImg1.png";
import img2 from "../assets/sliderImg2.png";
import img3 from "../assets/sliderImg3.png";
import img4 from "../assets/sliderImg4.png";
import img5 from "../assets/sliderImg5.png";
import img6 from "../assets/sliderImg6.png";
import img7 from "../assets/sliderImg7.png";

const OTT = () => {
  const sliderImages = [
    img1, // Replace with your image paths
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 768, // Adjust slider for screens smaller than 768px
        settings: {
          // arrows: false, // Hide arrows on mobile
          dots: true,
        },
      },
    ],
  };
  const [activeTab, setActiveTab] = useState("System");

  // Content for each tab
  const tabContent = {
    System: [
      "Processor: Quad-core ARM Cortex-A55 @ 1.5 GHz",
      "GPU: Mali-G52 MP2 with support for OpenGL ES 3.2, Vulkan 1.1, and OpenCL 2.0",
      "Memory: DDR4/LPDDR4X support up to 4GB",
      "Storage: eMMC 5.1 and SD 3.0",
      "Operating System: Android 12 and Linux compatibility",
      "Security: Integrated hardware secure boot and trusted execution environment",
      "Power Management: Dynamic power optimization for improved efficiency",
    ],
    Video: [
      "Video Engine (AVE) with dedicated hardware decoders and encoders",
      "VP9 Profile-2: Up to 4Kx2K@60fps",
      "H.265 HEVC Main-10: L5.1 up to 4Kx2K@60fps",
      "AVS2 Profile-2: Up to 4Kx2K@60fps",
      "H.264 AVC HP L5.1: Up to 1080P@60fps",
      "MPEG-4 SP/ASP: Up to 1080P@60fps (ISO-14496)",
      "WMV/VC-1 SP/MP/AP: Up to 1080P@60fps",
      "AVS-P16(AVS+)/AVS-P2 JiZhun: Profile up to 1080P@60fps",
      "MPEG-2 MP/HL: Up to 1080P@60fps (ISO-13818)",
    ],
    Audio: [
      "Audio Decoders: AAC-LC, HE-AAC, HE-AACv2, MP3, PCM, Vorbis",
      "FLAC: Up to 24-bit/192kHz",
      "Audio Output: Stereo (2.0 channel) and passthrough support for 5.1/7.1 channels",
      "Audio Interfaces: I2S, TDM, and PDM support with SPDIF (optical) output",
      "Noise Reduction: Integrated DSP for echo cancellation and noise suppression",
      "Microphone Support: Dual-mic array compatibility for far-field recognition",
    ],
    Power: [
      "Input Voltage: 5V DC",
      "Power Consumption: Idle (~1W), Load (~5W)",
      "Battery Support: Lithium-ion battery charging (optional)",
      "Overvoltage Protection: Yes",
      "Thermal Design: Passive cooling with heat dissipation optimization",
      "Sleep Mode: Ultra-low power sleep state",
    ],
    Connectivity: [
      "Wireless: Wi-Fi 5 (802.11ac), Bluetooth 5.0 with BLE",
      "Wired: Gigabit Ethernet (RJ45), USB 3.0 x 2, USB 2.0 x 1",
      "Expansion: GPIO headers for additional interfaces",
      "HDMI 2.1: Support for 4K output at 60Hz",
      "Miracast and DLNA support for wireless streaming",
      "PCIe: Support for external peripherals",
    ],
    "Size & Temp": [
      "Dimensions: 120mm x 90mm x 15mm",
      "Weight: 150g",
      "Operating Temperature: 0°C to 50°C",
      "Storage Temperature: -20°C to 70°C",
      "Humidity: 10% to 90% non-condensing",
      "Casing: Aluminum heat-dissipating enclosure for durability",
      "Mounting Options: VESA-compatible or desktop placement",
    ],
    Accessories: [
      "Included in the Box: Power Adapter (5V/2A), HDMI Cable (1.5m), Quick Start Guide",
      "Optional Accessories: Wireless Remote Control, USB-to-Serial Adapter",
      "Additional Peripherals: USB Camera for AI applications, Expansion Board",
      "Replacement Parts: Spare power adapter and HDMI cable available",
    ],
  };

  const tabTitles = Object.keys(tabContent);

  return (
    <div className="ottWrap">
      <div className="ottHeading text-center ">
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <div className="modelX">
                <h1>Model X</h1>
                <h1>Model X</h1>
                <h1>Model X</h1>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div className="modelObj ">
                <img src={obj1} alt="object" />
              </div>
            </Col>
            <Col xs={4} md={4}>
              {" "}
              <div className="modelX">
                <h1>Model X</h1>
                <h1>Model X</h1>
                <h1>Model X</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <h4>Redefining OTT Streaming like never before</h4>
      </div>
      <div className="modelSpecifications">
        <h2 className="text-center fw-bold" style={{ letterSpacing: ".75px" }}>
          Specifications
        </h2>
      </div>

      <div className="tabs-section">
        {/* Tabs */}
        <div className="tabs-container">
          {tabTitles.map((title, index) => (
            <div
              key={index}
              className={`tab-title ${activeTab === title ? "active" : ""}`}
              onClick={() => setActiveTab(title)}
            >
              {title}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="tab-content">
          <ul>
            {tabContent[activeTab].map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="modelViewSlider">
        <div className="custom-slider">
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="reachMoreViewersWrap  pricingCTA ">
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

export default OTT;
