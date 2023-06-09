import Book from './Book';

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
    BookList.map((value) => <Book key={value.id} bookitem={value} />));
};

export default Home;
