import React, { Component } from 'react';
import items  from "./fictiondata"
export const  RoomContext = React.createContext();

 class FictionProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };
    

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.flag === true);
        this.setState({
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          loading: false
        });
      }
//getting list a/c id fetch the images as well
      formatData(items) {
        let tempItems = items.map(item => {
          let id = item.sys.id;
        //   let images = item.fields.images.map(image => image.fields.file.url);
    
        //   let room = { ...item.fields, images, id };
        //   return room;
        });
        return tempItems;
      }
//getting genre list
getRoom = slug =>{
  let tempRooms = [...this.state.rooms];
  const room = tempRooms.find(room => room.slug ===slug);
  return room;
}

    render() {
        return (
            <FictionContext.Provider value={{...this.state,getRoom:this.getRoom}}>
            {this.props.children}
            </FictionContext.Provider>
        );

    }
}

export const FictionConsumer = FictionContext.Consumer;

export default FictionProvider ;
//export default RoomContext;