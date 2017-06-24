const INITIAL_STATE = {
  all: [],
  selected: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, all: action.payload.data };
    case 'FETCH_POST':
      return { ...state, selected: action.payload.data };
    case 'UPDATE_POST': {
      const all = state.all.map(post => {
        if (post.id === action.payload.data.id) {
          return action.payload.data;
        }
        else {
          return post;
        }
      });
      return { ...state, selected: action.payload.data, all };
    }
    case 'DELETE_POST': {
      const all = state.all.filter(post => post.id != state.selected.id);
      return { ...state, selected: null, all };
    }
    case 'CREATE_POST': {
      const all = state.all.concat(action.payload.data);
      return { ...state, all };
    }
    case 'DESELECT_POST':
      return { ...state, selected: null };
    default:
      return state;
  }
};
