import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const newId = useSelector((state) => state.books.books.length + 1);

  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');

  const onChange1 = (ev) => {
    settitle(ev.target.value);
  };

  const onChange2 = (ev) => {
    setauthor(ev.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = (ev) => {
    dispatch(
      addBook({
        item_id: `item${newId}`,
        title,
        author,
        category: 'Fiction',
      }),
    );
    ev.preventDefault();
    settitle('');
    setauthor('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Add New Book</h2>
        <input
          type="text"
          onChange={onChange1}
          placeholder="Title"
          value={title}
          required
        />
        <input
          type="text"
          onChange={onChange2}
          placeholder="Author"
          value={author}
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default AddNewBook;
