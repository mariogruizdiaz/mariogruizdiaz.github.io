// @flow
import { LOGIN,
    LOGIN_SUCCESS,
    LOGIN_UNSUCCESS,
    LOGIN_FAIL,
    VALIDATE_TOKEN,
    VALIDATE_TOKEN_SUCCESS,
    VALIDATE_TOKEN_UNSUCCESS,
    VALIDATE_TOKEN_FAIL,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_UNSUCCESS,
    LOGOUT_FAIL,
    FETCH_USER_IDENTITY,
    FETCH_USER_IDENTITY_SUCCESS,
    FETCH_USER_IDENTITY_UNSUCCESS,
    FETCH_USER_IDENTITY_FAIL
} from "../actionTypes";

export const logout = (data) => ({
    type: LOGOUT,
    payload: data
});

export const logoutSuccess = (data) => ({
    type: LOGOUT_SUCCESS,
    payload: data
});

export const logoutUnsuccess = (data) => ({
    type: LOGOUT_UNSUCCESS,
    payload: data
});

export const logoutFail = (data) => ({
    type: LOGOUT_FAIL,
    payload: data
});

export const validateToken = (data) => ({
    type: VALIDATE_TOKEN,
    payload: data
});

export const validateTokenSuccess = (data) => ({
    type: VALIDATE_TOKEN_SUCCESS,
    payload: data
});

export const validateTokenUnsuccess = (data) => ({
    type: VALIDATE_TOKEN_UNSUCCESS,
    payload: data
});

export const validateTokenFail = (data) => ({
    type: VALIDATE_TOKEN_FAIL,
    payload: data
});


export const login = (data) => ({
    type: LOGIN,
    payload: data
});

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginUnsuccess = (data) => ({
    type: LOGIN_UNSUCCESS,
    payload: data
});

export const loginFail = (data) => ({
    type: LOGIN_FAIL,
    payload: data
});

export const fetchUserIdentity = (data) => ({
    type: FETCH_USER_IDENTITY,
    payload: data
});

export const fetchUserIdentitySuccess = (data) => ({
    type: FETCH_USER_IDENTITY_SUCCESS,
    payload: data
});

export const fetchUserIdentityUnsuccess = (data) => ({
    type: FETCH_USER_IDENTITY_UNSUCCESS,
    payload: data
});

export const fetchUserIdentityFail = (data) => ({
    type: FETCH_USER_IDENTITY_FAIL,
    payload: data
});
