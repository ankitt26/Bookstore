import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category,
}) => (
  <div className="book" id={id}>
    <h5>{category}</h5>
    <h2>{title}</h2>
    <p>{author}</p>
    <div className="buttons">
      <button className="btn" type="submit">
        Comments
      </button>
      <button className="btn" type="submit">
        Remove
      </button>
      <button className="btn" type="submit">
        Edit
      </button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
