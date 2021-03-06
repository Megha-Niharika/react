import React from 'react'
import {Link} from "react-router-dom"
import defaultImg from "../images/room-1.jpeg"
import PropTypes from "prop-types";


export default function Genre({room}) {
    const { name,slug,images }= room;
    return (
        <article className="room">
        <div className="img-container">
        <img src={images[0] || defaultImg}
         alt="single room"/>
         <Link to={`/rooms/${slug}`} className="btn-primary room-link">
         Click
         </Link>
        </div>
        <p className="room-info"> {name}</p>
        </article>
    );
}
Genre.propTypes = {
    room: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  };