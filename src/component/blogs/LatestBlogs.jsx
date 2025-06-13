import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import Sidebar from "./Sidebar";
import useApiRequest from "../../hooks/useApiRequest";


const LatestBlogs = ({ transparent = false, showSidebar = false }) => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setShowSearch((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, settags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await useApiRequest({
        url: "blogs",
        method: "get",
        data: { per_page: 12 },
      });
      setCategories(res.data.categories);
      settags(res.data.tags)
      setBlogs(res.data.blogs.data);
    } catch (error) {
      console.log("Error ", error?.data?.message || error.message);
      setError(error?.data?.message || "Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: transparent ? "transparent" : "#000",
      }}
    >
      <div className="row">
        <div className={showSidebar ? "col-lg-8" : "col-12"}>
          <div className="row">
            {loading && <p className="text-white">Loading...</p>}
            {error && <p className="text-danger">{error}</p>}

            {!loading &&
              blogs.map((article) => (
                <div key={article.id} className="col-md-6 mb-4">
                  <div className="latest-blog" style={{ flexDirection: "column" }}>
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="article-image"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                    <div className="article-content mt-3">
                      {article.category && (
                        <div className="category-line">
                          
                          {article.subcategory && (
                            <span className="subcategory">{article.subcategory}</span>
                          )}
                        </div>
                      )}
                      <h4 className="title">{article.title}</h4>
                      {article.subtitle && <p className="subtitle">{article.subtitle}</p>}
                      <hr />
                      <p className="date">
                        <span style={{ marginRight: "10px" }}>
                          <SlCalender color="white" size={20} />
                        </span>
                        {article.created_at_formatted}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {showSidebar && (
          <div className="col-lg-4">
            <Sidebar
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              articles={blogs}
              categories={categories}
              tags={tags}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestBlogs;
