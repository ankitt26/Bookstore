import PropTypes from 'prop-types';

const AddNewBook = ({ newbook }) => (
  <>
    <form onSubmit={() => { newbook(); }}>
      <h2>Add New Book</h2>
      <input type="text" onChange={() => {}} placeholder="Title" required />
      <input type="text" onChange={() => {}} placeholder="Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  </>
);

AddNewBook.propTypes = {
  newbook: PropTypes.func.isRequired,
};

export default AddNewBook;
