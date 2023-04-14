import dynamic from "next/dynamic";
const GrapesEditor = dynamic(() =>import('@/components/GrapesEditor'),{ssr: false});
const CreatePost = () => {
    return(
        <GrapesEditor/>   
    );
};

export default CreatePost;