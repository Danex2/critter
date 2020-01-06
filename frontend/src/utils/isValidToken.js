export const isValidToken = token => token.exp < Date.now() / 1000;
