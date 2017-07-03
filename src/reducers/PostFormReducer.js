const INITIAL_STATE = {
  title: '',
  body: '',
  titleError: null,
  bodyError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_POST_TITLE':
      return { ...state, title: action.payload };
    case 'CHANGE_POST_BODY':
      return { ...state, body: action.payload };
    case 'CREATE_POST': {
      console.log(action.payload)
      // limpar formulario
      return INITIAL_STATE;
    }
    case 'CHANGE_POST_ERROR': {
      const { field, error } = action.payload;
      return { ...state, [`${field}Error`]: error };
    }
    case 'RESET_POST_FORM':
      return INITIAL_STATE;
    default:
      return state;
  }
};
