import React, { Component } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeDown, FaVolumeUp } from "react-icons/fa";

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span><FaBackward /></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span>{this.props.isPlaying ? <FaPause /> : <FaPlay />}</span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span><FaForward /></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
          <input
          type="range"
          className="seek-bar-top"
          value={(this.props.currentTime / this.props.duration) || 0}
          max="1"
          min="0"
          step="0.01"
          onChange={this.props.handleTimeChange}
        />
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>
        <section id="volume-control">
          <div><FaVolumeDown /></div>
          <input
          type="range"
          className="seek-bar-bottom"
          value={(this.props.currentVolume)}
          min="0"
          max="1"
          step="0.01"
          onChange={this.props.handleVolumeChange}
         />
          <div><FaVolumeUp /></div>
           {this.props.currentVolume}
        </section>
      </section>
    );
  }
}

export default PlayerBar;
