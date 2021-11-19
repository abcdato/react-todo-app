import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  static defaultProps = {
    isPlaying: false,
    minutes: '0',
    seconds: '0',
  };

  static propTypes = {
    isPlaying: PropTypes.bool,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
  };

  constructor(props) {
    super(props);

    const { isPlaying, minutes, seconds } = this.props;

    this.state = {
      isPlaying,
      minutes,
      seconds,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handlePause = () => {
    clearInterval(this.timerId);

    this.setState({
      isPlaying: false,
    });
  };

  handlePlay = () => {
    const { isPlaying } = this.state;

    if (!isPlaying) {
      this.setState({
        isPlaying: true,
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

    this.setState({ minutes: min, seconds: sec });
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
