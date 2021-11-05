export const getState = ({ setStore, getStore, getActions }) => {
  return {
    store: {
      profileUser: {},
    },
    actions: {
      setProfile: (data) => {
        setStore({ profileUser: data });
      },

      getPeopleinfo: (id) => {
        const actions = getActions();
        let url = "http://localhost:5000/user" + id;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            actions.setProfile(data);
          });
      },
    },
  };
};
