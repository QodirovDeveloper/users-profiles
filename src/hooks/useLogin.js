import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { login as _login } from "../app/features/userSlice";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);

      if (!req.user) throw new Error("Login failed");

      dispatch(_login(req.user));
      toast.success(`Welcome come back, ${auth.currentUser.displayName}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { login, isPending };
};
