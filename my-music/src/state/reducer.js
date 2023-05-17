export const initial_state = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: 'BQDuzMslDCI3LtZBAqAaWacFiSr-5myn1wQjK7Ck0PxC5Vju3K…TO1p5Re-XkQsJcHajVuTxmH_HYZzppi5LXkAjvK7mlD6pVl9g'
//   token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
