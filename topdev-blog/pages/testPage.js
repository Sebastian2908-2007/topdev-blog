import dynamic from "next/dynamic";
//const ThreeDLogo = dynamic(() => import("@/components/ThreeDLogo"),{ssr: false});
const ThreeDText = dynamic(() => import("@/components/ThreeDText"),{ssr: false});
//const R3fDemo = dynamic(() => import("@/components/ThreeDLogo"),{ssr: false});


const TestPage = () => {

   
    return(
       <ThreeDText/>
    );
};

/*
colors for site
DARKER BLUE rgb(33, 49, 89
 NAVY rgb(61, 96, 152)
 Whiteish 231, 231, 231) used for text shadow
 black
 white

*/
export default TestPage;