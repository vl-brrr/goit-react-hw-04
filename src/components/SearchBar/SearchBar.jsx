import toast from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    if (event.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING!');
      return;
    }

    onSubmit(event.target.elements.query.value);
    event.target.reset();
  };
  return (
    <header className={css.header}>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <IoIosSearch color="#0367a6" size={24} />
          </button>
        </form>
      </div>
    </header>
  );
};
