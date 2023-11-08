import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function Message({ variant, children }) {
  return <Alert variant={variant}>{children}</Alert>;
}

Message.defaultProps = {
  variant: 'info',
};

Message.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Message;
