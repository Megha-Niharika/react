import React, { Component } from 'react';
import items  from "./data"
import fictions from "./fictiondata"
export const  RoomContext = React.createContext();

 class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        fic:[]
    };
    

    componentDidMount() {
        let rooms = this.formatData(items);
        let fic = this.fictdata(fictions);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
          rooms,
          featuredRooms,
          fic,
          sortedRooms: rooms,
          loading: false
        });
      }
      fictdata(fictions){
        let tempfic = fictions.map(fiction => {
          let id = fiction.sys.id;
          let fic1 = { ...fiction.fields, id };
          return fic1;
        });
        return tempfic;
      }
//getting list a/c id fetch the images as well
      formatData(items) {
        let tempItems = items.map(item => {
          let id = item.sys.id;
          let images = item.fields.images.map(image => image.fields.file.url);
    
          let room = { ...item.fields, images, id };
          return room;
        });
        return tempItems;
      }
//getting genre list
getRoom = slug =>{
  let tempRooms = [...this.state.rooms];
  const room = tempRooms.find(room => room.slug ===slug);
  return room;
}

getfiction = slug =>{
  let tempfi = [...this.state.fic];
  const fic1= tempfi.find(fic1 => fic1.slug === slug);
  console.log(fic1);
  return fic1;
}
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,getfiction:this.fiction}}>
            {this.props.children}
            </RoomContext.Provider>
        );

    }
}

export const RoomConsumer = RoomContext.Consumer;

export default RoomProvider ;
//export default RoomContext;