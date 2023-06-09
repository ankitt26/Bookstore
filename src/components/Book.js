import PropTypes from 'prop-types';

const Book = ({ bookitem }) => {
  const {
    id, title, topic, author,
  } = bookitem;
  return (
    <div className="book" id={id}>
      <h5>{topic}</h5>
      <h2>{title}</h2>
      <p>{author}</p>

    </div>
  );
};

Book.propTypes = {
  bookitem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
