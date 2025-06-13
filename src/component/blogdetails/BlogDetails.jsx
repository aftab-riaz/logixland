import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import useApiRequest from "../../hooks/useApiRequest";
import Sidebar from "../blogs/Sidebar";


const BlogDetails = ({ transparent = false, showSidebar = false }) => {
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await useApiRequest({
        url: "blogs",
        method: "get",
        
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
            <div
          className="container py-5"
          style={{
            backgroundColor: transparent ? "transparent" : "#000",
            color: "white",
          }}
         >
          {loading && <p>Loading...</p>}
          {error && <p className="text-danger">{error}</p>}

          {!loading &&
            blogs.map((blog) => (
              <div key={blog.id} className="mb-5">
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  style={{ width: "100%", borderRadius: "12px" }}
                  className="mb-4"
                />
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            ))}
        </div>
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

export default BlogDetails;
