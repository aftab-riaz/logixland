import React, { useEffect, useState } from "react";
import useApiRequest from "../../hooks/useApiRequest";
import { SlCalender } from "react-icons/sl";


const NewsBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    await useApiRequest({
      url: "blogs",
      method: "get",
      data: { per_page: 4 },
    })
      .then((res) => {
        console.log(res.data.blogs.data);
        setBlogs(res.data.blogs.data);
      })
      .catch((error) => {
        console.log("Error ", error.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="news-blog-container">
      <div className="container">
        <div className="header text-center mb-5">
          <p style={{ color: "#aaaaaa" }}>News & Blog</p>
          <h1 style={{ fontSize: "45px", color: "white", fontWeight: "800" }}>
            Latest News & <span style={{ color: "#c9f31d" }}>Blog</span>
          </h1>
        </div>

        {loading && <p style={{ color: "white" }}>Loading blogs...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="row">
          {Array.isArray(blogs) &&
            blogs.map((article) => (
              <div key={article.id} className="col-lg-6 mb-4">
                <div className="blog-item">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="article-image"
                    style={{ width: "50%", height: "auto" }}
                  />
                  <div className="article-content" style={{ color: "white" }}>
                    {article.category && (
                      <div className="category-line">
                        {article.subcategory && (
                          <span className="subcategory">
                            {" | "}
                            {typeof article.subcategory === "string"
                              ? article.subcategory
                              : article.subcategory.title ||
                                article.subcategory.name ||
                                "[Unknown Subcategory]"}
                          </span>
                        )}
                      </div>
                    )}

                    <h4 className="title">{article.title}</h4>
                    {article.subtitle && (
                      <p className="subtitle">{article.subtitle}</p>
                    )}
                    <hr />
                    <p className="date"><span style={{marginRight: '10px'}}><SlCalender  color="white" size={20}/> </span>{article.created_at_formatted}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;
