import { User } from "firebase/auth";
import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Pokemon } from "../../contexts/use-pokemon-api";

export const saveTeam = async (team: Pokemon[], firebaseUser: User) => {
  try {
    const docRef = await addDoc(collection(getFirestore(), "teams"), {
      userId: firebaseUser.uid,
      team,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error);
  }
};

export const getTeams = async (firebaseUser: User) => {
  const q = query(
    collection(getFirestore(), "teams"),
    where("userId", "==", firebaseUser.uid)
  );
  const querySnapshot = await getDocs(q);
  const teams: Pokemon[] = [];
  querySnapshot.forEach((doc) => {
    teams.push({ ...(doc.data() as Pokemon) });
  });

  return teams;
};
