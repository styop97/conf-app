import React from 'react'
import NavBar from "../components/NavBar";

const MainLayout = ({category, children}) => {
    return (
        <div className='main-content'>
            <NavBar category={category}/>
            <div className='mx-3 my-5'>
                {children}
            </div>
        </div>
    )
}

export default MainLayout
