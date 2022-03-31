import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/index';

const Header = () => {

  const dispatch = useDispatch();
  
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logoutHanler =  () =>{
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Login using Redux</h1>
      {isAuth && (
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>My Profile</a>
          </li>
          <li>
            <button onClick={logoutHanler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;