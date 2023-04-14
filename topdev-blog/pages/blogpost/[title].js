import dbConnect from "@/db/config/connection";
import {BlogPost} from '../../db/models';
import parse from 'html-react-parser';

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
      const postData = await BlogPost.findOne({title:postTitle});
      data = JSON.stringify(postData);
      console.log(data)
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
    let html = postObj.html.replace('<body ','<div ');
    html = html.replace('</body>','</div>');
    return(
        <div>{parse(html)}</div>
    );

};