import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const AdminDash = ({isAdmin}) => {
   const [category,setCategory] = useState('');
   const [users,setUsers] = useState(null);
   const [categories,setCategories] = useState(null);


const submitCategory = async () => {
    try{
    await fetch('/api/addCategory',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({category})
    });
    
    setCategory('');
}catch(e){
    console.log('submission problem',e);
}
};

const deleteCategory = async (e) => {
    const categoryToDlt = e.target.getAttribute('data-category');
    try{
         await fetch('/api/deleteCategory',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({category:categoryToDlt}),
        });
        
        setCategories(null);
    }catch(e){
        console.log('submission problem',e);
    }
};

useEffect(() => console.log(category),[category]);

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
const getCategories = async () => {
    if(categories) {
        setCategories(null);
        return;
    }
    try{
        const response = await fetch('/api/getCategories');
        const categoryData = await response.json();
        setCategories(categoryData);
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
         <button onClick={() => { submitCategory()}}  type="button" className="btn btn-primary w-50">Add</button>
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

<button className="mt-3 btn btn-info w-75 text-white" onClick={() => getCategories()}>Categories</button>
            {categories ? <section className="d-flex flex-column mt-3">{categories.map(category => (
                <div key={category._id} className="d-flex flex-row">
                 <span
                 className="text-white"
                 >{category.category}
                 </span>
                 <button onClick={(e) => {deleteCategory(e)}} data-category={category._id}>Delete</button>
                 </div>
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