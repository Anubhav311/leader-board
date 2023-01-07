import { database } from "../firebaseConfig";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const contributionsColRef = collection(database, "contribution");
const organizationsColRef = collection(database, "organizations");
const usersColRef = collection(database, "users");

function getUser(uid) {
    console.log('id id id')
    console.log(uid)
//   const docReference = doc(database, usersColRef, uid);
//   getDoc(docReference)
//     .then((doc) => {
//       console.log(doc.data());
//     })
//     .catch((err) => console.log(err));
}
function getUsers(setState) {
  getDocs(usersColRef).then((snapshot) => {
    const arr = [];
    snapshot.docs.forEach((doc) => {
      arr.push({ id: doc.id, ...doc.data() });
    });
    setState(arr);
  });
}

function getOrganisation() {
  getDocs(organizationsColRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
    });
  });
}

function getTeamMembers() {
  getDocs(organizationsColRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
    });
  });
}

function getContributions() {
  getDocs(contributionsColRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
    });
  });
}

export { getUser, getOrganisation, getTeamMembers, getContributions };
