import PropTypes from 'prop-types';
import '../../styles/Pagination.scss';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePage = (number) => {
    window.history.replaceState({}, '', window.location.origin + window.location.pathname);

    paginate(number);
  };

  return (
    <div className='pagination'>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => changePage(number)} className={number === currentPage ? 'active' : ''}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
