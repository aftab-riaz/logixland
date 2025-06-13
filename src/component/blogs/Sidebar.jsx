import React, { useState, useEffect, useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ articles, categories }) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const safeArticles = articles || [];

  const lowerSearch = search.toLowerCase().trim();

  const filteredArticles = lowerSearch
    ? safeArticles.filter((a) =>
        [a.title, a.subtitle, a.category, a.subcategory]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(lowerSearch))
      )
    : safeArticles;

  const latest = filteredArticles.slice(0, 3);

  const popularTags = [
    "Laravel code generation tools",
    "Blueprint Laravel",
    "FrankenPHP",
    "Artificial Intelligence",
    "Artificial Intelligence and Machine Learning",
    "FCM",
  ];

  const filteredTags = lowerSearch
    ? popularTags.filter((tag) =>
        tag.toLowerCase().includes(lowerSearch)
      )
    : popularTags;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (inputRef.current) inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <aside
      style={{
        backgroundColor: "#1f1f1f",
        color: "#ddd",
        padding: "50px 40px",
        borderRadius: "12px",
        minHeight: "450px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 0 10px rgba(0,0,0,0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #1f1f1f",
      }}
    >
      <div>
        <h3
          style={{
            color: "white",
            userSelect: "none",
            marginBottom: "20px",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Search
        </h3>

        <input
          ref={inputRef}
          type="text"
          placeholder="Press CTRL + / OR CTRL + K"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 25px",
            borderRadius: "12px",
            border: "1px solid #444",
            backgroundColor: "#131313",
            color: "#eee",
            fontSize: "14px",
            outline: "none",
            marginBottom: "25px",
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.8)",
            alignItems: "center",
          }}
        />

        <h4
          style={{
            color: "white",
            userSelect: "none",
            marginBottom: "20px",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Categories
        </h4>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {categories.map((cat, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                color: "#aaa",
                fontWeight: "500",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#b4ff00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              <span style={{ color: "#555" }}>
                <MdArrowForwardIos size={20} />
              </span>{" "}
              {cat.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4
          style={{
            color: "white",
            userSelect: "none",
            marginTop: "20px",
            fontWeight: "600",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          Latest Blogs
        </h4>
        {latest.map((a) => (
          <div
            key={a.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "18px",
              gap: "14px",
            }}
          >
            <img
              src={a.image_url}
              alt={a.title}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 5px rgba(0,0,0,0.6)",
              }}
            />
            <div>
              <h5
                style={{
                  margin: 0,
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                {a.title}
              </h5>
              <span
                style={{
                  fontSize: "13px",
                  color: "#666",
                  fontWeight: "400",
                }}
              >
                {a.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4
          style={{
            color: "white",
            userSelect: "none",
            marginTop: "20px",
            fontWeight: "600",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          Popular Tags
        </h4>
        <div className="tag-clouds">
          {filteredTags.map((tag, i) => (
            <a key={i} href={`/blogs?tag=${encodeURIComponent(tag)}`}>
              {tag}
            </a>
          ))}
        </div>
      </div>

      <div
        className="relative w-full h-[400px] bg-cover bg-center text-white flex items-center justify-center hire-img mt-5"
        style={{
          opacity: "4",
          backgroundImage: `url('/src/assets/widget-cta.jpg')`,
        }}
      >
        <div className="bg-opacity-100 p-8 rounded-lg text-center">
          <p className="text-3xl font-bold mb-4">Get A Quote</p>
          <p className="text-3xl font-bold mb-4">
            Looking For Creative Software Engineer
          </p>
          <button
            style={{ backgroundColor: "#c9f31d" }}
            className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded"
          >
             <Link
                  className="bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded text-decoration-none"
                  to="/contact"
                >
                  Hire Me <MdOutlineKeyboardArrowRight size={20} />
                </Link>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
