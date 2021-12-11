import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  static defaultProps = {
    id: '0',
    isPlaying: false,
  };

  static propTypes = {
    id: PropTypes.string,
    isPlaying: PropTypes.bool,
    minutes: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired,
    saveTimeToLocalStorage: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { isPlaying, minutes, seconds } = this.props;

    this.state = {
      isTimeSaved: false,
      isPlaying,
      minutes,
      seconds,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handlePause = () => {
    const { minutes, seconds, isTimeSaved } = this.state;
    const { id, saveTimeToLocalStorage } = this.props;

    clearInterval(this.timerId);

    if (!isTimeSaved) {
      this.setState({
        isPlaying: false,
        isTimeSaved: true,
      });
    }
    saveTimeToLocalStorage(id, minutes, seconds);
  };

  handlePlay = () => {
    const { isPlaying } = this.state;

    if (!isPlaying) {
      this.setState({
        isPlaying: true,
        isTimeSaved: false,
      });
      this.timerId = setInterval(this.updateTimer, 1000);
    }
  };

  updateTimer = () => {
    const { minutes, seconds } = this.state;

    let sec = parseInt(seconds, 10);
    let min = parseInt(minutes, 10);

    sec += 1;

    if (sec === 60) {
      sec = 0;
      min += 1;
    }

    this.setState({ minutes: String(min), seconds: String(sec) });
  };

  render() {
    const { minutes, seconds } = this.state;

    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.handlePlay} type="button" aria-label="play" />
        <button className="icon icon-pause" onClick={this.handlePause} type="button" aria-label="pause" />
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    );
  }
}
