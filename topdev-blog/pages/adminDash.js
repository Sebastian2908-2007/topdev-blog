import { useState } from "react";

const AdminDash = ({isAdmin}) => {
   const [category,setCategory] = useState('');


const submitCategory = async () => {
    try{
    const response = await fetch('/api/addCategory',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({category})
    });
    const data = await response.json();
    console.log(data);
    setCategory('');
}catch(e){
    console.log('submission problem',e);
}
};

    return(
        !isAdmin ? (
            <div>admins only</div>
        ) : (
            <>
            <h1 className="text-center">Dashboard</h1>
            <form className="
             form-group
             d-flex
             flex-column
             align-items-center
             justify-content-between
            ">
         <label htmlFor="categoryName" className="mb-2">Add Category</label>
         <input 
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          className="w-75 mb-3" 
          id="categoryName"
          value={category}
          />
         <button onClick={() => { submitCategory()}}  type="button" className="btn btn-primary w-50">Primary</button>
           </form>
            </>
        )
    );
};

export function getServerSideProps({req, res}) {
    let isAdmin = false;
    if (req.cookies.isAdmin === 'true') {
        isAdmin = true;
    }
    return {props: {isAdmin: isAdmin} }
};

export default AdminDash;