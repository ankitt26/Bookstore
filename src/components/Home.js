import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';
import { fetchData } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.books.items);
  console.log(data.length);
  const arrayData = [];
  console.log(arrayData);

  Object.keys(data).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const items = data[key];
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        arrayData.push({ key, item });
      }
    }
  });

  const renderData = (value) => (
    <Book
      key={value.key}
      id={value.key}
      title={value.item.title}
      author={value.item.author}
      category={value.item.category}
    />
  );
  return (
    <>
      <div>{arrayData.map(renderData)}</div>
      <AddNewBook />
    </>
  );
};

export default Home;
