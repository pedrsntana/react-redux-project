

const getInitialState = () => ({
  posts: [],
});

const app = (state = getInitialState(), {type, payload}) => {
  switch(type) {
    case 'actionTypes.SHOW_POSTS':
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
};



export default app;
