import React from "react";
import "../App.css";

const posts = [
  {
    id: 1,
    title: "Why Disinformation is a National Security Threat - Not Just a PR Problem",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://i.ibb.co/Vcbz8Ghc/empowered-businesswoman-sharing-goals-targets-enterprise-activity.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Media", href: "/" },
    author: {
      name: "Author",
      role: "Linkwire Media",
      href: "/",
      imageUrl:
        "https://i.ibb.co/Vcbz8Ghc/empowered-businesswoman-sharing-goals-targets-enterprise-activity.jpg",
    },
  },

  {
    id: 1,
    title: "The New Battlefield: How Disinformation is Weaponized",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://i.ibb.co/JwBWNFqg/woman-records-conversation-audience.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Media", href: "#" },
    author: {
      name: "Author",
      role: "Linkwire Media",
      href: "#",
      imageUrl:
        "https://i.ibb.co/JwBWNFqg/woman-records-conversation-audience.jpg",
    },
  },

  {
    id: 1,
    title: "Why Disinfromation is the New Corporate Espionage",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://i.ibb.co/SDzD4rgp/front-view-formal-male-journalist.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "media", href: "#" },
    author: {
      name: "Author",
      role: "Linkwire Media",
      href: "#",
      imageUrl:
        "https://i.ibb.co/SDzD4rgp/front-view-formal-male-journalist.jpg",
    },
  },
  
  // More posts...
]

export default function Example() {
  return (
    <div className="blog-container">
      <div className="content-wrapper">
        <div className="header-container">
          <h2 className="main-heading-blog">From the blog</h2>
          <p className="subheading">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.id} className="post-article">
              <div className="image-container">
                <img alt="" src={post.imageUrl || "/placeholder.svg"} className="post-image" />
                <div className="image-overlay" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <time dateTime={post.datetime} className="post-date">
                    {post.date}
                  </time>
                  <a href={post.category.href} className="post-category">
                    {post.category.title}
                  </a>
                </div>
                <div className="post-title-container">
                  <h3 className="post-title">
                    <a href={post.href}>
                      <span className="post-link-overlay" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="post-description">{post.description}</p>
                </div>
                <div className="author-container">
                  <img alt="" src={post.author.imageUrl || "/placeholder.svg"} className="author-image" />
                  <div className="author-info">
                    <p className="author-name">
                      <a href={post.author.href}>
                        <span className="author-link-overlay" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="author-role">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
