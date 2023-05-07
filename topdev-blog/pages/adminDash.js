import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const AdminDash = ({isAdmin}) => {
   const [category,setCategory] = useState('');
   const [users,setUsers] = useState(null);


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

useEffect(() => console.log(users),[users]);

const getUsers = async () => {
    if(users) {
        setUsers(null);
        return;
    }
    try{
        const response = await fetch('/api/getAllUsers');
        const userData = await response.json();
        setUsers(userData);
    }catch(e){
        console.log('Client',e);
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
             mt-3
            ">
         <label htmlFor="categoryName" className="mb-3">Add Category</label>
         <input 
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          className="w-75 mb-3" 
          id="categoryName"
          value={category}
          />
         <button onClick={() => { submitCategory()}}  type="button" className="btn btn-primary w-50">Add Category</button>
           </form>
           <section className="d-flex flex-column align-items-center">
            <Link className="text-center mt-3" href='/createPost'>Create Post</Link>
            <button className="mt-3 btn btn-info w-75 text-white" onClick={() => getUsers()}>Users</button>
            {users ? <section className="d-flex flex-column mt-3">{users.map(user => (
                 <span
                  key={user._id}
                 className="text-white"
                 >{user.email}</span>
            ))}</section>:null}
           </section>
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