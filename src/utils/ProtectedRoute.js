
import PropTypes from 'prop-types';

const ProtectedRoute = ({authenticated}) => {
    if(authenticated === true ) {
        console.log(true);
        return true;
    }else {
        console.log(false);
        return false;
    }
    
}
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

ProtectedRoute.propTypes = {
  user: PropTypes.object
};

export default ProtectedRoute;