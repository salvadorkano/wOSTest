import * as types from '_context/actionsTypes/testActionsTypes';

export const users = () => ({
    type: types.USERS
});

export const usersSuccess = payload => ({
    type: types.USERS_SUCCESS,
    payload
});

export const usersError = payload => ({
    type: types.USERS_ERROR,
    payload
});


export const album = () => ({
    type: types.ALBUM
});

export const albumSuccess = payload => ({
    type: types.ALBUM_SUCCESS,
    payload
});

export const albumError = payload => ({
    type: types.ALBUM_ERROR,
    payload
});