export const getState = ({ setStore, getStore, getActions }) => {
  return {
    store: {
<<<<<<< HEAD
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
=======
      profileUser: {},
    },
    actions: {
      setProfile: (data) => {
        setStore({ profileUser: data });
>>>>>>> b005d3877d690d510a64df30ff6047feb278c077
      },
    },
    actions: {},
  };
};