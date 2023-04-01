import React from 'react'

export const HomeCard = ({ src }) => {
    // This is HomePage big boxes card
    return (
        <div  style={{marginRight: '20px'}}>
            <img  
            style={{width:'500px'}} src={src} />
        </div>
    )
}

