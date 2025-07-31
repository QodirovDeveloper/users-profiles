import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { logOut } from "../app/features/userSlice";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setIsPending(true);
    try {
      await signOut(auth);
      dispatch(logOut());
      toast.success(`See you`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { logout, isPending };
};
