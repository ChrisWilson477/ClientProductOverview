import React from 'react'

const Photo = ({ photo }) => {

  console.log(photo);
  return (
    <div className="thumbnail-box photo">
      <img className="thumbnail picture" src={photo.url} />
    </div>
  )
}

export default Photo;
