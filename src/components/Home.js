import Book from './Book';
import Navbar from './Navbar';

const Home = () => {
  const BookList = [
    {
      id: 1,
      title: 'Book 1',
      topic: 'education',
      author: 'Ankitt',
    },
    {
      id: 2,
      title: 'Book 1',
      topic: 'education',
      author: 'Ankitt',
    },
    {
      id: 3,
      title: 'Book 1',
      topic: 'education',
      author: 'Ankitt',
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        {BookList.map((value) => (
          <Book key={value.id} bookitem={value} />
        ))}
      </div>
    </>
  );
};

export default Home;
