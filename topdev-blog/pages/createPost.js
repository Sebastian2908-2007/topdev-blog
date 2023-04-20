import dynamic from "next/dynamic";
const GrapesEditor = dynamic(() =>import('@/components/GrapesEditor'),{ssr: false});
const CreatePost = ({isAdmin}) => {
    return(
        !isAdmin  ? (
            <div>admins only</div> 
        ):(<GrapesEditor/> )  
    );
};

export function getServerSideProps({req, res}) {
    let isAdmin = false;
    if (req.cookies.isAdmin === 'true') {
        isAdmin = true;
    }
    return {props: {isAdmin: isAdmin} }
};
export default CreatePost;