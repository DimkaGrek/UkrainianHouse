import { useSelector } from 'react-redux';
import { selectorsBooks } from '../my-redux/Books/booksSlice';

export const useLibrary = () => {
  const books = useSelector(selectorsBooks);
  return { books };
};
