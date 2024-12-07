import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./MediaKit.css";

const MediaKit = () => {
  const icons = [
    {
      id: 1,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    {
      id: 2,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    {
      id: 3,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    {
      id: 4,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    {
      id: 5,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    {
      id: 6,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    {
      id: 7,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    {
      id: 8,
      svgLink: "/assets/discord.svg",
      jpgLink: "/assets/discord.svg",
      iconImage: "/assets/discord.svg",
    },
    // Add more icons as needed
  ];

  const [visibleIcons, setVisibleIcons] = useState(4);

  const loadMoreIcons = () => {
    setVisibleIcons((prev) => Math.min(prev + 4, icons.length));
  };

  return (
    <div className="mediaWrap">
      <div className="mediaHeading d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Media Kit</h1>
        <p>
          The graphic elements of Cast Bunny brand are made available for app
          developers, influencers and members of the press! Feel free to use
          these to promote your apps or refer to us in the outside world.
        </p>
      </div>

      <div className="mediaIcon d-flex flex-column justify-content-center align-items-center">
        <h3>Icon</h3>
        <Container className="text-center mt-4">
          <Row className="justify-content-center mt-3">
            {icons.slice(0, visibleIcons).map((icon) => (
              <Col key={icon.id} xs={6} md={3} className="mb-4">
                <div className="icon-placeholder mediaIconPlaceholder d-flex justify-content-center align-items-center">
                  <img src={icon.iconImage} alt={`Icon ${icon.id}`} />
                </div>
                <div className="mediaIconLinkWrap">
                  <div className="mediaIconLink ">
                    <a href={icon.svgLink} download>
                      Download in <span className="">svg</span>
                    </a>
                  </div>
                  <div className="mediaIconLink ">
                    <a href={icon.jpgLink} download>
                      Download in <span>jpg</span>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {/* {visibleIcons < icons.length && (
            <Button onClick={loadMoreIcons} className="mediaIconLoadMore">
              Load more
            </Button>
          )} */}
        </Container>
      </div>

      <div className="mediaBadges d-flex flex-column justify-content-center align-items-center">
        <h3>Badges</h3>
        <Container className="text-center mt-4">
          <Row className="justify-content-center mt-3">
            {icons.slice(0, visibleIcons).map((icon) => (
              <Col key={icon.id} xs={6} md={3} className="mb-4">
                <div className="icon-placeholder mediaBadgePlaceholder d-flex justify-content-center align-items-center">
                  <img src={icon.iconImage} alt={`Icon ${icon.id}`} />
                </div>
                <div className="mediaIconLinkWrap">
                  <div className="mediaIconLink ">
                    <a href={icon.svgLink} download>
                      Download in <span className="">svg</span>
                    </a>
                  </div>
                  <div className="mediaIconLink ">
                    <a href={icon.jpgLink} download>
                      Download in <span>jpg</span>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {/* {visibleIcons < icons.length && (
            <Button onClick={loadMoreIcons} className="mediaIconLoadMore">
              Load more
            </Button>
          )} */}
        </Container>
      </div>

      {/* <div className="mediaPhoto d-flex flex-column justify-content-center align-items-center">
        <h3>Photos</h3>
        <Container className="text-center mt-4">
          <Row className="justify-content-center mt-3">
            {icons.slice(0, visibleIcons).map((icon) => (
              <Col key={icon.id} xs={6} md={3} className="mb-4">
                <div className="icon-placeholder mediaPhotoPlaceholder d-flex justify-content-center align-items-center">
                  <img src={icon.iconImage} alt={`Icon ${icon.id}`} />
                </div>
                <div className="mediaIconLinkWrap">
                  <div className="mediaIconLink ">
                    <a href={icon.svgLink} download>
                      Download in <span className="">svg</span>
                    </a>
                  </div>
                  <div className="mediaIconLink ">
                    <a href={icon.jpgLink} download>
                      Download in <span>jpg</span>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {visibleIcons < icons.length && (
            <Button onClick={loadMoreIcons} className="mediaIconLoadMore">
              Load more
            </Button>
          )}
        </Container>
      </div>

      <div className="mediaVideo d-flex flex-column justify-content-center align-items-center">
        <h3>Video</h3>
        <Container className="text-center mt-4">
          <Row className="justify-content-center mt-3">
            {icons.slice(0, visibleIcons).map((icon) => (
              <Col key={icon.id} xs={6} md={3} className="mb-4">
                <div className="icon-placeholder mediaVideoPlaceholder d-flex justify-content-center align-items-center">
                  <img src={icon.iconImage} alt={`Icon ${icon.id}`} />
                </div>
                <div className="mediaIconLinkWrap">
                  <div className="mediaIconLink ">
                    <a href={icon.svgLink} download>
                      Download in <span className="">svg</span>
                    </a>
                  </div>
                  <div className="mediaIconLink ">
                    <a href={icon.jpgLink} download>
                      Download in <span>jpg</span>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {visibleIcons < icons.length && (
            <Button onClick={loadMoreIcons} className="mediaIconLoadMore">
              Load more
            </Button>
          )}
        </Container>
      </div> */}
    </div>
  );
};

export default MediaKit;
