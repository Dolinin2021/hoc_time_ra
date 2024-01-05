import React from "react";
import changeTime from "./changeTime";
import DateTime from "./DateTime";
import PropTypes from 'prop-types';

const dateTimePretty = changeTime => Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
    this.interval = 0;
    this.showPrettyTime = this.showPrettyTime.bind(this);
    this.changeTime = changeTime;
  }

  static propTypes = {
    date: PropTypes.string,
  }

  static get displayName() {
    const name = Component.displayName || Component.name || 'Component';
    return `WithData(${name})`;
  }

  showPrettyTime() {
    this.setState({ date: this.changeTime(this.props.date) });
  }

  componentDidMount() {
    this.showPrettyTime();
    this.interval = setInterval(() => this.showPrettyTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Component {...this.props} {...this.state} />;
  }
};
  
const DateTimePretty = dateTimePretty(changeTime)(DateTime);

export default DateTimePretty;
