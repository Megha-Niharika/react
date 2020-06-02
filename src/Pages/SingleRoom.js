import React, { Component } from 'react'
import img from "../images/img.jpeg";
import Banner from "../components/Banner"
import { Link } from "react-router-dom";
import { RoomContext } from "../RoomProvider"
import StyledHero from "../components/StyledHero";
import defaultBcg from "../images/room-1.jpeg";
import Navbar from '../components/Navbar';
import Services from "../components/Services"
//import Example from "../components/Example"
import {Button, Modal} from "react-bootstrap"

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            bname:this.props.match.params.bname,
            defaultBcg: defaultBcg,
            show:false
        };
    }
    static contextType = RoomContext;
 handleClose = () =>
    { this.setState({show:false});
}
handleShow = () =>
    { this.setState({show:true});
}
    
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        
        //  const { getfiction } = this.context;
        //  const fic = getfiction(this.state.bname);
    
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
            images,
            books
        } = room;

        const [mainImg, ...defaultImg]= images;
        const {slug,bname}= room;
        console.log(room,"megha")
        
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
                            {books.map((item, index) => {
                                console.log(item,"====")
                               return <article className="room">
                                <div className="img-container">
                                <img key={index} src={item.url} alt={item.url}/>
                                {/* <Example>
                                 <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                                 read
                                 </Link>
                                 </Example> */}
                                 <Button variant="primary" onClick={this.handleShow}>
              Read this book
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>you are reading</Modal.Title>
              </Modal.Header>
              <Modal.Body><p>{item.description}</p></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>

{/* <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button> */}
              </Modal.Footer>
            </Modal>
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
