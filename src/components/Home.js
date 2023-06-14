import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Home = () => {
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
