import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchData, postBook } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');

  const onChange1 = (ev) => {
    settitle(ev.target.value);
  };

  const onChange2 = (ev) => {
    setauthor(ev.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = async (ev) => {
    ev.preventDefault();
    settitle('');
    setauthor('');
    await dispatch(
      postBook({
        item_id: `item${uuidv4()}`,
        title,
        author,
        category: 'Fiction',
      }),
    );
    await dispatch(fetchData());
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
