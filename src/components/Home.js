import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddNewBook from './AddNewBook';
// import Book from './Book';
import { fetchData } from '../redux/books/Fetch';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // const data = useSelector((state) => state.books.books);
  const data = useSelector((state) => state.fetchdata.items);
  console.log(data);
  // const alldata = () => {
  //   for (let i in data) {
  //     console.log()
  //     return (
  //       <Book
  //         key={i}
  //         id={i}
  //         title={data[i][0].title}
  //         author={data[i][0].author}
  //         category={data[i][0].category}
  //       />
  //     );
  //   }
  // };

  return (
    <>
      <div>
        {/* {alldata()} */}
      </div>
      <AddNewBook />
    </>
  );
};

export default Home;
