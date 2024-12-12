import React, { useState } from "react";
import "./Blog.css";
import { IoSearch } from "react-icons/io5";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";

const Blog = () => {
  var a;
  if (window.innerWidth < 768) {
    a = 2;
  } else a = 3;
  const [visibleCards, setVisibleCards] = useState(a); // Number of cards to show initially
  // Sample data array
  const blogData = [
    {
      id: 1,
      title: "A Normal Blog Title that goes good",
      content:
        "Curabitur sit amet sapien nec ipsum fermentum consequat. Vivamus suscipit.",
      author: "Mr. Blogger",
      date: "01 Month, 2024",
      image: blog2,
    },
    {
      id: 2,
      title: "A Normal Blog Title that goes good",
      content:
        "Curabitur sit amet sapien nec ipsum fermentum consequat. Vivamus suscipit.",
      author: "Mr. Blogger",
      date: "01 Month, 2024",
      image: blog3,
    },
    {
      id: 3,
      title: "A Normal Blog Title that goes good",
      content:
        "Curabitur sit amet sapien nec ipsum fermentum consequat. Vivamus suscipit.",
      author: "Mr. Blogger",
      date: "01 Month, 2024",
      image: blog4,
    },
    {
      id: 4,
      title: "Another Blog Title to Read",
      content:
        "This is additional content for testing the Read More functionality.",
      author: "Mr. Blogger",
      date: "02 Month, 2024",
      image: blog5,
    },
    {
      id: 5,
      title: "Interesting Blog Title Here",
      content:
        "Explore the interesting points written here. Curabitur sit amet sapien.",
      author: "Mr. Blogger",
      date: "03 Month, 2024",
      image: blog6,
    },
    {
      id: 6,
      title: "Last Blog in the List",
      content: "Vivamus suscipit lorem nec ipsum fermentum consequat.",
      author: "Mr. Blogger",
      date: "04 Month, 2024",
      image: blog7,
    },
  ]; // Function to load more cards
  const loadMore = () => {
    if (window.innerWidth < 768) {
      setVisibleCards((prev) => prev + 2);
    } else setVisibleCards((prev) => prev + 3);
  };

  return (
    <div className="blogWrap">
      <div className="readBlog text-center d-flex flex-column justify-content-center align-items-center">
        <h3>Read Blogs That Empower</h3>
        <p>
          Explore articles crafted to inform, inspire, and elevate your journey.
          Whether you need expert advice or creative ideas, our blog is here to
          guide and support you every step of the way.
        </p>
      </div>

      <div className="searchBlog  text-center d-flex flex-column justify-content-center align-items-center">
        <div className="searchBlogInput">
          <IoSearch className="searchIcon" />

          <input type="text" placeholder="Search a Blog" />
        </div>

        <h6>or explore by category</h6>
        <Container>
          <Row className="blogCategoryWrap g-2">
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>{" "}
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>{" "}
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>
          </Row>
          <Row className="blogCategoryWrap  blogSecondRow g-2">
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>{" "}
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>{" "}
            <Col xs={6} md={3} className="blogCategory">
              <p>Category</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="featuredWrap">
        <Container>
          <Row>
            <Col md={7} className="featureLeft">
              <h4>Featured</h4>
              <div className="card-image-placeholder"> <img src={blog1} alt="" /> </div>
            </Col>
            <Col
              md={5}
              className="featureRight mt-4 d-flex flex-column justify-content-center "
            >
              <h1>A Featured Blog Title that goes good</h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet sapien nec ipsum fermentum consequat. Vivamus
                suscipit, nibh id eleifend lacinia, metus odio aliquet ex, eget
                iaculis orci orci sit amet urna.
              </h6>
              <p>
                Posted by <span>Mr. Blogger</span> on{" "}
                <span>01 Month, 2024</span>
              </p>
            </Col>
          </Row>{" "}
        </Container>
      </div>

      <div className="categoryWrap ">
        <div className="categoryBtn">
          <button>Category</button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Container>
            <Row>
              {blogData.slice(0, visibleCards).map((blog) => (
                <Col key={blog.id} xs={12} md={4} lg={4} className="mb-4">
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="card-image-placeholder"> <img src={blog.image} alt="" /></div>
                      <h3>{blog.title}</h3>
                      <p>{blog.content}</p>
                      <p className="card-meta">
                        by <strong>{blog.author}</strong> on{" "}
                        <span>{blog.date}</span>
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        {visibleCards < blogData.length && (
          <div className="d-flex justify-content-center align-items-center">
            <button className="read-more " onClick={loadMore}>
              Read more
            </button>
          </div>
        )}
      </div>

      <div className="reachMoreViewersWrap">
        <Container>
          <Row>
            <Col xs={12} md={9} lg={9}>
              <div className="reachMoreText">
                Get Started today, <br />
                It feels good to reach more viewers.
              </div>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
                <Link to={"/signUp"}>
                  <button className="reachMoreBtn">Sign up now</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
