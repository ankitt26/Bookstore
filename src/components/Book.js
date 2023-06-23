import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchData } from '../redux/books/booksSlice';
import styles from '../CSS/Book.module.css';
import CircularProgressBar from './Circularbar';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeBtn = async (ev) => {
    ev.preventDefault();
    await dispatch(deleteBook(ev.target.id));
    await dispatch(fetchData());
  };
  return (
    <div className={styles.book} id={styles.id}>
      <div className={styles.details}>
        <h5 className={styles.category}>{category}</h5>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.btnBr}`} type="submit">
            Comments
          </button>
          <button
            className={`${styles.btn} ${styles.btnBr}`}
            type="submit"
            id={id}
            onClick={removeBtn}
          >
            Remove
          </button>
          <button className={styles.btn} type="submit">
            Edit
          </button>
        </div>
      </div>
      <CircularProgressBar />
      <div className={styles.chapter}>
        <h3 className={styles.currentChapter}>CURRENT CHAPTER</h3>
        <h3 className={styles.chapter1}>Chapter 1: &quot; Introduction &quot;</h3>
        <button className={styles.chapterBtn} type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
