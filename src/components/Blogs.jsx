import React from "react";
import "../App.css";

const posts = [
  {
    id: 1,
    title: "Why Disinformation is a National Security Threat - Not Just a PR Problem",
    href: "/blog/first-blog",
    description:
      "There's a dangerous misunderstanding that still lingers in leadership circles: that disinformation is a PR issue. Something to be handled by the communications team with a quick press release, a tweet, or if things get really bad—a press conference.",
    imageUrl:
      "https://i.ibb.co/Vcbz8Ghc/empowered-businesswoman-sharing-goals-targets-enterprise-activity.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Media", href: "/blog/first-blog" },
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
      "You don't need missiles to collapse a country anymore. All it takes is a smartphone, a viral tweet, and a well-timed lie. Welcome to the new battlefield—one where the weapons are digital, and the targets are trust, truth, and stability.",
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
      "Let's call it what it is—your biggest threat may no longer be a data breach or a boardroom leak. It's a false narrative that goes viral before your team even sees it coming.",
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
