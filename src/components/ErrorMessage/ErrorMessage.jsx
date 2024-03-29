import css from './ErrorMessage.module.css';
import { MdError } from 'react-icons/md';

export const ErrorMessage = () => (
  <div className={css.container}>
    <MdError color="#BF1F2C" size={50} />
    <span>Oops! Something went wrong, please reload the page.</span>
  </div>
);
