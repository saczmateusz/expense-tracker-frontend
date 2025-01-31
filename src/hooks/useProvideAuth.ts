import { useState } from 'react';

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: any) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export const useProvideAuth = (): {
  user: any;
  signIn: any;
  signOut: any;
} => {
  const [user, setUser] = useState<any>(null);

  const signIn = (cb: any) => {
    return fakeAuth.signin(() => {
      setUser('user');
      cb();
    });
  };

  const signOut = (cb: any) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signIn,
    signOut,
  };
};
