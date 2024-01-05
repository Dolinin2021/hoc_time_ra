import PropTypes from 'prop-types';

export default function DateTime(props) {
  DateTime.propTypes = {
    date : PropTypes.string,
  }

  return (
    <p className="date">{props.date}</p>
  )
}
