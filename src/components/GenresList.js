
import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../RoomProvider";
import Genre from "./Genre";
import Loading from "./Loading";
import {categories}  from "../../src/logincomponent/UserFunctions"
export default class GenresList extends Component {
  static contextType = RoomContext;


  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    categories(user).then(res => {
      console.log(res.status)

      if (res.status === 200) {
        console.log("-------")
      this.props.history.push(`/home`)
      }
      else{
        console.log(res)
        this.setState({errors:res.data.error})
      }
    }
  )
  return false;
  }

  render() {
    let { loading, featuredRooms: rooms } = this.context;

     rooms = rooms.map(room => {
      return <Genre key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Genres List"
        subtitle="It is never too late to be what you might have been." />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
