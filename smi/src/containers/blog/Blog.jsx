import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="smi__blog section__padding" id="blog">
    <div className="smi__blog-heading">
      <h1 className="gradient__text">
        Blogs on SocialMirrorInsights, Explore more.
      </h1>
    </div>
    <div className="smi__blog-container">
      <div className="smi__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="SJan 22, 2024"
          text="Challenge negative thoughts. Practice cognitive-behavioral techniques to challenge negative thoughts and beliefs about yourself."
        />
      </div>
      <div className="smi__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Jan 31, 2024"
          text="Celebrate individuality. Embrace your uniqueness and individuality."
        />
        <Article
          imgUrl={blog03}
          date="Feb 03,2024"
          text="Focus on personal growth. Shift your focus from seeking approval to personal growth."
        />
        <Article
          imgUrl={blog04}
          date="Feb 11,2024"
          text="Self-awareness and self-acceptance."
        />
        <Article
          imgUrl={blog05}
          date="Mar 02,2024"
          text="Surround yourself with supportive people."
        />
      </div>
    </div>
  </div>
);

export default Blog;
