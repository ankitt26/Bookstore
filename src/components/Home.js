import { useState } from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Home = () => {
  const [BookList, setBookList] = useState([
    {
      id: 1,
      title: 'Booklife',
      topic: 'science',
      author: 'Ankitt',
    },
    {
      id: 2,
      title: 'guoliu',
      topic: 'education',
      author: 'Ankjk',
    },
    {
      id: 3,
      title: 'man of war',
      topic: 'sports',
      author: 'Ankmid',
    },
  ]);

  const newbook = () => {
    setBookList((prev) => prev);
  };

  return (
    <>
      <div>
        {BookList.map((value) => (
          <Book key={value.id} bookitem={value} />
        ))}
      </div>
      <AddNewBook newbook={newbook} />
    </>
  );
};

export default Home;
