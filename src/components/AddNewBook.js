import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchData, postBook } from '../redux/books/booksSlice';
import styles from '../CSS/AddNewBook.module.css';

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
      <h2 className={styles.h2}>Add New Book</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          onChange={onChange1}
          placeholder="Title"
          value={title}
          required
        />
        <input
          className={styles.input}
          type="text"
          onChange={onChange2}
          placeholder="Author"
          value={author}
          required
        />
        <button className={styles.btn} type="submit">
          ADD BOOK
        </button>
      </form>
    </>
  );
};

export default AddNewBook;
