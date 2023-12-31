import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Paginate({ pages, page, isAdmin = false, keyword = '' }) {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map(x => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

Paginate.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  isAdmin: PropTypes.bool,
  keyword: PropTypes.string,
};

export default Paginate;
