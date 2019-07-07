import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData
    };
  }

  render() {
    return (
      <section className="library">
        {
          this.state.albums.map( (album, index) =>
              <div className="album-item" key={index}>
                <div className="img-left">
                  <Link to={`/album/${album.slug}`}>
                    <img src={album.albumCover} alt={album.title} />
                  </Link>
                </div>
                <div className="album-info-float">
                  <div>{album.title}</div>
                  <div>{album.artist}</div>
                  <div>{album.songs.length} songs</div>
                </div>
                <div className="album-clear"></div>
              </div>
          )
        }
      </section>
    );
  }
}

export default Library;
