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
            defaultBcg: defaultBcg,
           bookDesc:"",
           show: false
        };   
    }

    static contextType = RoomContext;
      handleClose = () =>
    { this.setState({show:false});
       }
handleShow = (item) =>
    { 
        this.setState({show:true});
    //this.state.show= true;
    this.setState({bookDesc:item.description})
    console.log(item,"itemmmmm")
    
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
             <Button variant="primary" onClick={()=>this.handleShow(item)}>
              Read this book
            </Button>
            </div>
            </article>
            })}
            
            <Modal 
    show={this.state.show}
    onHide={this.handleClose}
    dialogClassName="modal-150w"
    aria-labelledby="example-custom-modal-styling-title"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>
        Read the book
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
      {this.state.bookDesc}
      
    </Modal.Body>
  </Modal>   
                </div>
                </section> 
                 <Services/>
            </>
        )
    }
}
