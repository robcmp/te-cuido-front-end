export const getState = ({ setStore, getStore, getActions }) => {
  return {
    store: {
      login_data: {
        userLogin: "",
        userPass: "",
      },
      logged_user: {
        userName: "",
        email: "",
        userPass: "",
        firstName: "",
        lastName: "",
        isAdmin: false,
        bio: "",
        // auth_token: "",
      },
    },
    actions: {},
  };
};