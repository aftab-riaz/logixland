import React, { useEffect } from 'react';
import { BlogsHero } from '../component/blogs/BlogsHero';
import LatestBlogs from '../component/blogs/LatestBlogs';
import Sidebar from '../component/blogs/Sidebar';




export const BlogsPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#131313';

        return () => {
            document.body.style.backgroundColor = '#131313';
        };
    }, []);

    return (
        <>
        <BlogsHero />
       <LatestBlogs transparent={true} showSidebar={true} />
      
       
      

          
           </>
    );
};
