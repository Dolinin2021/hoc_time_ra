import DateTimePretty from './dateTimePretty';
import PropTypes from 'prop-types';

export default function Video(props) {
  Video.propTypes = {
    url : PropTypes.string,
    date : PropTypes.string,
  }
  
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}
