export const API_BASE_URL = process.env.REACT_APP_DJANGO_URL || 'http://localhost:8000';

export const TOKEN_URL = `${API_BASE_URL}api/token/`
export const REFRESH_TOKEN_URL = `${API_BASE_URL}api/token/refresh/`
export const CURRENT_USER_URL = `${API_BASE_URL}api/current-user/`
