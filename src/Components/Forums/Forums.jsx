import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./Forums.css";
import { Col, Container, Row } from "react-bootstrap";

const Forums = () => {
  const [categories, setCategories] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Category 1");
  const [forumData, setForumData] = useState({
    "Category 1": [
      { title: "How to learn React effectively?", replies: 77, views: 145 },
      {
        title: "Best practices for React state management",
        replies: 62,
        views: 132,
      },
      { title: "What is JSX and how does it work?", replies: 45, views: 110 },
      { title: "React vs Angular: Which is better?", replies: 33, views: 99 },
      { title: "How to use useEffect in React?", replies: 71, views: 198 },
      { title: "Understanding React Hooks", replies: 89, views: 210 },
      {
        title: "Creating reusable components in React",
        replies: 54,
        views: 140,
      },
      { title: "Deploying React apps with Netlify", replies: 42, views: 120 },
      { title: "How to handle forms in React?", replies: 66, views: 170 },
      { title: "React Router: A beginner’s guide", replies: 38, views: 87 },
    ],
    "Category 2": [
      { title: "Introduction to Node.js", replies: 58, views: 180 },
      {
        title: "How to build REST APIs with Express.js?",
        replies: 76,
        views: 140,
      },
      { title: "What is Event Loop in Node.js?", replies: 44, views: 98 },
      {
        title: "Node.js vs Django for backend development",
        replies: 52,
        views: 111,
      },
      { title: "Connecting Node.js with MongoDB", replies: 80, views: 190 },
      {
        title: "Best practices for securing Node.js applications",
        replies: 39,
        views: 120,
      },
      {
        title: "How to use middleware in Express.js?",
        replies: 64,
        views: 170,
      },
      { title: "Node.js streams: How do they work?", replies: 41, views: 85 },
      {
        title: "Working with file uploads in Node.js",
        replies: 49,
        views: 122,
      },
      { title: "Asynchronous programming in Node.js", replies: 61, views: 135 },
    ],
    "Category 3": [
      { title: "Introduction to MongoDB", replies: 55, views: 88 },
      { title: "How to design schemas in MongoDB?", replies: 68, views: 150 },
      { title: "MongoDB vs MySQL: Key differences", replies: 71, views: 175 },
      { title: "Understanding NoSQL databases", replies: 46, views: 115 },
      { title: "How to optimize MongoDB queries?", replies: 54, views: 130 },
      {
        title: "Indexing in MongoDB: A complete guide",
        replies: 78,
        views: 210,
      },
      {
        title: "How to perform aggregation in MongoDB?",
        replies: 60,
        views: 180,
      },
      { title: "Setting up a replica set in MongoDB", replies: 33, views: 97 },
      { title: "Data modeling in MongoDB", replies: 44, views: 101 },
      { title: "Securing your MongoDB database", replies: 72, views: 160 },
    ],
    "Category 4": [
      { title: "What is React Native?", replies: 66, views: 145 },
      {
        title: "Building mobile apps with React Native",
        replies: 57,
        views: 120,
      },
      { title: "React Native vs Flutter", replies: 41, views: 99 },
      { title: "How to use Expo in React Native?", replies: 49, views: 135 },
      { title: "Debugging React Native applications", replies: 62, views: 140 },
      {
        title: "React Native performance optimization tips",
        replies: 78,
        views: 190,
      },
      {
        title: "How to integrate APIs in React Native?",
        replies: 51,
        views: 125,
      },
      {
        title: "Building reusable components in React Native",
        replies: 67,
        views: 165,
      },
      {
        title: "Best practices for styling in React Native",
        replies: 58,
        views: 150,
      },
      {
        title: "How to publish React Native apps to app stores?",
        replies: 43,
        views: 110,
      },
    ],
  });

  const [visibleForums, setVisibleForums] = useState(8);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleForums(8); // Reset visible forums when switching categories
  };

  const handleViewMore = () => {
    setVisibleForums((prev) => prev + 5); // Load 5 more forums
  };

  return (
    <div className="forumWrap">
      <div className="forumHeading">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8}>
              <div className="forumHeadingLeft">
                <h1>Welcome to the FORUM</h1>
                <p>
                  Our forum is a welcoming space where knowledge meets
                  collaboration.
                </p>
                <div className="forumHeadingInput">
                  <IoSearch className="searchIcon" />
                  <input type="text" placeholder="Search for solutions" />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="forumHeadingRight"></div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="forumCategories">
        <h3 className="forumCategoriesHeading">Browse by Category</h3>
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <Container>
          <Row>
            <Col xs={12} sm={12} md={10}>
              <div className="forum-list d-flex flex-column justify-content-center ">
                {forumData[selectedCategory]
                  ?.slice(0, visibleForums)
                  .map((forum, index) => (
                    <div key={index} className="forum-item">
                      <p>{forum.title}</p>
                      <span>
                        {forum.replies} <br /> Replies
                      </span>
                      <span>
                        {forum.views} <br /> Views
                      </span>
                    </div>
                  ))}
                {visibleForums < forumData[selectedCategory]?.length && (
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="view-more " onClick={handleViewMore}>
                      Load more
                    </button>
                  </div>
                )}
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={2}
              className="categoryRight d-flex flex-column justify-content-center align-items-center"
            >
              <div className="categoryRightDiscussion">Start a Discussion</div>
              <div className="categoryContributor d-flex flex-column justify-content-center align-items-center text-center">
                <h5>Popular Contributor</h5>
                <Container>
                  <Row>
                    <Col xs={6} sm={6} md={6}>
                      <div className="contributorInfo d-flex flex-column justify-content-center align-items-center text-center">
                        <div className="contributorImg"></div>
                        <div className="contributorName">Mr.XYZ</div>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6}>
                      <div className="contributorInfo d-flex flex-column justify-content-center align-items-center text-center">
                        <div className="contributorImg"></div>
                        <div className="contributorName">Mr.XYZ</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} sm={6} md={6}>
                      <div className="contributorInfo d-flex flex-column justify-content-center align-items-center text-center">
                        <div className="contributorImg"></div>
                        <div className="contributorName">Mr.XYZ</div>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6}>
                      <div className="contributorInfo d-flex flex-column justify-content-center align-items-center text-center">
                        <div className="contributorImg"></div>
                        <div className="contributorName">Mr.XYZ</div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Forums;
