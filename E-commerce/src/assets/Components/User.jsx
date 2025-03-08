import React, { useState } from 'react'

const User = () => {

    const [isEdit, setIsEdit] = useState(false);
    const [userData,setUserData]=useState(
        {
            uname:"Priyanshu",
            email:"priyanshupatel@gmail.com"
        }
    )
    const [formdata, setFormdata] = useState(userData)

    const handleChange = (e)=>{
        setFormdata((prevData)=>{
            return prevData={...prevData,[e.target.name] : e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formdata.uname || !formdata.email)
        {
            alert("fill the filled");
            return;
        }

        setUserData(formdata);
        setIsEdit(!isEdit)

    }

    return (
        <section style={{ height: "100vh" }} class="account-container">
            <aside class="sidebar">
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#orders">Orders</a></li>
                    <li><a href="#wishlist">Wishlist</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#logout">Logout</a></li>
                </ul>
            </aside>

            <main class="account-content">
                {isEdit ?
                    <div class="section">
                        <h2>Edit Profile</h2>
                        <form onSubmit={handleSubmit}>
                            <label for="uname">Full Name</label>
                            <input type="text" value={formdata.uname} onChange={(e)=>handleChange(e)} name='uname' id="name" placeholder="Enter your full name" />

                            <label for="email">Email</label>
                            <input type="email" value={formdata.email} onChange={(e)=>handleChange(e)}  name='email' id="email" placeholder="Enter your email" />

                            <button type="submit">Save Changes</button>
                        </form>
                    </div>

                    :
                    <div>
                        <div id="profile" class="section">
                            <h2>Profile Information</h2>
                            <p>Name: {userData.uname}</p>
                            <p>Email: {userData.email}</p>
                            <button onClick={() => setIsEdit(!isEdit)}>Edit Profile</button>
                        </div>

                        <div id="orders" class="section">
                            <h2>Order History</h2>
                            <p>No recent orders.</p>
                        </div>

                        <div id="wishlist" class="section">
                            <h2>Wishlist</h2>
                            <p>Your saved items will appear here.</p>
                        </div>
                    </div>
                }

            </main>
        </section>
    )
}

export default User