import React, { useEffect } from 'react';
import BlogDetails from '../component/blogdetails/BlogDetails';
import Sidebar from '../component/blogs/Sidebar';


export const BlogsDetailsPage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#131313';

        return () => {
            document.body.style.backgroundColor = '#131313';
        };
    }, []);

    return (
        <>
        <BlogDetails transparent={true} showSidebar={true}/>
        
      
       
      

          
           </>
    );
};
