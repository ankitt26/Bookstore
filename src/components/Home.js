import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';
import { Fetchdata } from '../redux/books/Fetch';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);

  const data = useSelector((state) => state.books.books);
  return (
    <>
      <div>
        {data.map((value) => (
          <Book
            key={value.item_id}
            id={value.item_id}
            title={value.title}
            author={value.author}
            category={value.category}
          />
        ))}
      </div>
      <AddNewBook />
    </>
  );
};

export default Home;
