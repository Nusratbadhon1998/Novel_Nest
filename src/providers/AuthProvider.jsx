import { createContext, useEffect, useState } from "react";

import auth from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  TwitterAuthProvider,
} from "firebase/auth";
import useAxios from "../hooks/useAxios";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);
// google provider
const googleProvider = new GoogleAuthProvider();
// github provider
const gitProvider = new GithubAuthProvider();
gitProvider.addScope("user:email");

const twitterProvider = new TwitterAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        axiosSecure.post("/jwt",loggedUser)
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axiosSecure("/logout",loggedUser)
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign In User

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // //Sign Out
  const logOut = () => {
    setLoading(false);
    setUser(null);
    return signOut(auth);
  };





  //Google Sign IN
  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };
  const twitterSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, twitterProvider);
  };

  //GitHub Sign In
  const gitSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, gitProvider);
  };

  const allValue = {
    createUser,
    user,

    loading,
    setLoading,
    setUser,
    signIn,
    googleSignIn,
    gitSignIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
