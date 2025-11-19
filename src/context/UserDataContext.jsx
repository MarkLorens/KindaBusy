import { createContext, useContext, useEffect, useState } from "react";
import { onSnapshot, doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import { Context as AuthContext } from "./AuthContext";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setUserData(null);
      setLoading(false);
      return;
    }

    const unsub = onSnapshot(doc(db, "users", user.uid), (snap) => {
      if (snap.exists()) {
        setUserData(snap.data());
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [user, authLoading]);

  //----ACTIONS

  //----Edit Profile Actions-----

  //----Sticky Notes Actions-----
  const addNewQuickTask = async (newTask) => {
    if (!user) return;

    const ref = doc(db, "users", user.uid);
    const quickTaskId = `qt_${crypto.randomUUID()}`;

    try {
      await updateDoc(ref, {
        [`quickTasks.${quickTaskId}`]: { description: newTask },
      });
    } catch (err) {
      console.error("Error adding quick task:", err);
    }
  };

  const deleteQuickTask = async (qtId) => {
    const ref = doc(db, "users", user.uid);

    await updateDoc(ref, {
      [`quickTasks.${qtId}`]: deleteField(),
    });
  };
  //----End of Sticky Notes Actions-----

  return (
    <UserDataContext.Provider
      value={{ userData, loading, addNewQuickTask, deleteQuickTask }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
