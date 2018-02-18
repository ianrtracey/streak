import { auth, googleProvider } from './firebase';

export const signInWithGoogle = () => auth.signInWithRedirect(googleProvider);

export const logout = () => {
  return auth.logout();
};

export const getAuthResult = () => auth.getRedirectResult();

export const firebaseAuth = auth;
