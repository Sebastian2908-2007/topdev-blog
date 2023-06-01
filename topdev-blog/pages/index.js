import dynamic from "next/dynamic";
const ThreeDLogo = dynamic(() => import("@/components/ThreeDLogo"),{ssr: false});
const ThreeDText = dynamic(() => import("@/components/ThreeDText"),{ssr: false});
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
//import cookie from 'js-cookie';
import Pagination from "@/components/Pagination";
import { paginate } from "@/utils/paginate";


export default function Home() {
  const [postData,setPostData] = useState(null);
  const [categories,setCategories] = useState(null);
  const [currentCategory,setCurrentCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

 const handlePageChange = (page) => {
  setCurrentPage(page);
};

  async function getPosts() {
    const response = await fetch("api/getAllPosts");
    const jsonData = await response.json();
    setPostData(jsonData);
  }
  const getCategories = async () => {
    const response = await fetch('/api/getCategories');
    const categoryData = await response.json();
    setCategories(categoryData);
  };
  
  const filterPosts = () => {
    if(!currentCategory) {
      return postData;
    }
   const newPstData = postData.filter(post => 
     post.category === currentCategory

    );
    return newPstData;
  
  };
const filteredPosts= filterPosts();
const paginatePosts = paginate(filteredPosts, currentPage, pageSize);
  useEffect(() => {
    getPosts();
    getCategories();
  },[]);

 //useEffect(() => postsToShow,[]);
  return (
    <>
      <Head>
        <title>TopDev Blog</title>
        <meta name="description" content="A Blog for all things tech and then some" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="icon" href="/topdev-logo.png" />
      </Head>
  
    {!postData ? (<div>Loading...</div>):(
      
      <section className='
      h-100  
      d-flex
      flex-column
      justify-content-between
      align-items-center
      pb-5
      '>
        <section className='d-flex flex-wrap w-100'>
          <button onClick={() => setCurrentCategory(null)} className="flex-fill category-btn">All Posts</button>
     {categories ? (categories.map(category => (
        <button 
        onClick={() => setCurrentCategory(category._id)}
        className='flex-fill category-btn'
        key={category._id}>
          {category.category}
        </button>
      )))
      :
      (<div>no categories yet</div>)}
      </section>
      <ThreeDText/>
        <h1 className='
        display-4 
        text-center
        my-3
        '
        >
          Curious About Websites, Tech, and Life?   
          &nbsp;
           <small className='
           text-muted
           '>
            TopDev can help...
            </small>
          </h1>
          <ThreeDLogo/>
        
            <div className='container p-4'>
            <div className='row gy-3 gx-3'>

        {
          
          paginatePosts.map((post) => (
        <div className='
        col-12
        col-sm-6
        col-md-4
        col-lg-3
         '
         key={post._id}
         >
          <div className='
          card
          p-2 
          d-flex
          flex-column
          justify-content-between
          justify-content-stretch
          align-items-center
          post-card
          '>
          <h2 className='text-center h4 text-white'>{post.title}</h2>
          <span className='text-light'>{post.postDate.split('T')[0]}</span>
          <Link className='postCardTitle' href={`/blogpost/${post.title}`}>Enjoy Post</Link>
          </div>
        </div>
      ))
      }
      <Pagination
        items={filteredPosts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
        </div>
       </div>
     
      </section>
    ) }
    </>
  )
}
