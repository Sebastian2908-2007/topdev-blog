import Comments from "@/components/Comments";
import dbConnect from "@/db/config/connection";
import {BlogPost} from '@/db/models';
import parse from 'html-react-parser';
import dynamic from "next/dynamic";
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
      //console.log(postData.comments);
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
 
  const postObj = JSON.parse(post);
  console.log(postObj);
   //console.log(postObj.likes);
   //const comments = postObj.comments;
 
//console.log(postObj);
    let html = postObj.html.replace(
      '<body ',
      '<section class="d-flex flex-column justify-content-between align-items-center m-4 bg-light text-center p-1 border border-dark" ');
    html = html.replace('</body>','</section>');  
    //console.log(html);



    return(
      <>
     <Likes postObj={postObj}/>
      {parse(html)}
      <section className="d-flex flex-column justify-content-between align-items-center m-4 bg-light text-center p-1 border border-dark" >
      <Comments postObj={postObj}/>
        </section>
      </>
    );

};