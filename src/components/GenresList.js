
import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../RoomProvider";
import Genre from "./Genre";
import Loading from "./Loading";
export default class GenresList extends Component {
  static contextType = RoomContext;

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
