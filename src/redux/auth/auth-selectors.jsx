const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getFetchingCurrentUser = state => state.auth.getFetchingCurrentUser;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getFetchingCurrentUser,
};

export default authSelector;
