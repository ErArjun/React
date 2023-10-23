import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className='descriptionbox-nav-box fade'>
                Reviews(122)
            </div> 
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus optio, fugiat laudantium, fugit quo illum assumenda hic quaerat modi dignissimos obcaecati dicta nesciunt ratione doloribus corporis dolores consequatur consequuntur. Voluptatum!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cumque minima molestias earum error cum autem, quos exercitationem adipisci at, dolorum consequatur porro fugit aut recusandae quisquam dolorem quaerat repellat.</p>
        </div>
    </div>
  )
}
