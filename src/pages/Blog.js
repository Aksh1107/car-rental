import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../Component/Helmet/Helmet";
import CommonSection from "../Component/U_layout/CommonSection";
import BlogList from "../Component/U_layout/BlogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
