import * as types from '_context/actionsTypes/testActionsTypes';

export const usersReducer = (state, action) => {
  switch (action.type) {
    case types.USERS:
      return {
        ...state,
        data: {
          loading: true,
          error: null,
        },
      };
    case types.USERS_SUCCESS:
      return {
        ...state,
        data: {
          users: action.payload,
          loading: false,
        },
      };
    case types.USERS_ERROR:
      return {
        ...state,
        data: {
          ...state.data,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const albumReducer = (state, action) => {
  switch (action.type) {
    case types.ALBUM:
      return {
        ...state,
        data: {
          loading: true,
          error: null,
        },
      };
    case types.ALBUM_SUCCESS:
      return {
        ...state,
        data: {
          album: action.payload,
          loading: false,
        },
      };
    case types.ALBUM_ERROR:
      return {
        ...state,
        data: {
          ...state.data,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
