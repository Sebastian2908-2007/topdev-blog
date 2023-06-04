import { useState } from "react";
import Head from "next/head";
import Comments from "@/components/Comments";
import dbConnect from "@/db/config/connection";
import {BlogPost} from '@/db/models';
import parse from 'html-react-parser';
import dynamic from "next/dynamic";
import ShareModal from "@/components/ShareModal";
import LoginRegModal from "@/components/LoginRegModal";
const Likes = dynamic(() =>import('@/components/Likes'),{ssr: false});



export async function getStaticPaths () {
let data;
   try{ 
        await dbConnect();
        }catch(e) {
          console.log(e);
        }
        
        try{
          const postData = await BlogPost.find();
        data = postData;
     
        }catch(e) {
      console.log(e);
        }
        const paths = data.map(blogPost => {
            return {
                params: {title: blogPost.title}
            }
        });


return{
    paths,
    fallback:'blocking'
 }

};

export async function getStaticProps(context) {
    const postTitle = context.params.title;
let data;
try{ 
    await dbConnect();
    }catch(e) {
      console.log(e);
    }
    
    try{
      const postData = await BlogPost.findOne({title:postTitle}).populate('comments').populate({path:'comments',populate:'user'}).populate('likes');
      data = JSON.stringify(postData);
    }catch(e) {
  console.log(e);
    }
    
  

    return {
        props: {post: data},
        revalidate: 10,
    }
}



export default function Post ({post}) {
  const [openShareModal,setOpenShareModal] = useState(false);
  const [modalInfo,setModalInfo] = useState({});
  const [loginModalOpen,setLoginModalOpen] = useState(false);
  const postObj = JSON.parse(post); 
    let html = postObj.html.replace(
      '<body ',
      '<section class="d-flex flex-column justify-content-between align-items-center m-4 bg-light text-center p-1 border border-dark" ');
    html = html.replace('</body>','</section>');  
    html = html.replace('<img','<img class="img-fluid"');  
    
    return(
      <>
    <Head>
     <meta charSet="utf-8" />
     <title>{postObj.title}</title>
     <link rel="icon" href='/topdev-logo.png' />
     <meta name="title" content={postObj.title} />
     <meta name="description" content={postObj.metaDescription} />
     <meta name="keywords" content={postObj.keywords}></meta>
    </Head>
    <div className="m-4 d-flex flex-row justify-content-between">
     <Likes postObj={postObj} setLoginModalOpen={setLoginModalOpen}/>
     <button onClick={() => {setOpenShareModal(true); setModalInfo({image:'/topdev-logo.png',title:`${postObj.title}`});}} className="p-2 rounded-circle like-share-icon">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
       <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
         </svg>
      </button>
      <ShareModal
        openShareModal={openShareModal} 
        setOpenShareModal={setOpenShareModal}
        setModalInfo={setModalInfo} 
        modalInfo={modalInfo}
        />
    </div>
      {parse(html)}
      <section className="d-flex flex-column justify-content-between align-items-center m-4 bg-light text-center p-1 border border-dark" >
      <Comments postObj={postObj} setLoginModalOpen={setLoginModalOpen}/>
      <LoginRegModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen}/>
        </section>
      </>
    );

};