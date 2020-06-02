import React, { Component } from 'react'
import img from "../images/img.jpeg";
import Banner from "../components/Banner"
import { Link } from "react-router-dom";
import { RoomContext } from "../RoomProvider"
import StyledHero from "../components/StyledHero";
import defaultBcg from "../images/room-1.jpeg";
import Navbar from '../components/Navbar';
import Services from "../components/Services"

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
    }
    static contextType = RoomContext;

    
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
         console.log(room,"=====")
        if (!room) {
            return (
                <div className="error">
                    <h3> no such genres could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to genres
              </Link>
                </div>
            );
        }
        const {
            name,
            images
        } = room;

        const [mainImg, ...defaultImg]= images;
        const {slug}= room;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultImg}>
                <Navbar/>
                    <Banner title={`${name} list`}
                    subtitle="Be the change that you wish to see in the world" >
                        <Link to="/rooms" className="btn-primary">
                            back to genres
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                            {defaultImg.map((item, index) => {
                               return <article className="room">
                                <div className="img-container">
                                <img key={index} src={item} alt={name}/>
                                 <Link to={`/rooms ${slug}`} className="btn-primary room-link">
                                 read
                                 </Link>
                                </div>
                                </article> 
                         })
                         }      
                    </div>
                </section> 
                    <Services/>
            </>
        )
    }
}
