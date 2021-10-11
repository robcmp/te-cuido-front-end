export const getState = ({ setStore, getStore, getActions }) => {
  return {
    store: {
      profileUser:
        localStorage.getItem("loginUser") == null
          ? {}
          : JSON.parse(localStorage.getItem("loginUser")),
    },
    actions: {
      setProfile: (data) => {
        const store = getStore();
        setStore({ profileUser: data });
      },
    },
  };
};
