import { database } from "../firebaseConfig";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const contributionsColRef = collection(database, "contribution");
const teamsColRef = collection(database, "teams");
const usersColRef = collection(database, "users");

function getUser(uid, setUserData) {
  const docReference = doc(usersColRef, uid);
  getDoc(docReference)
    .then((doc) => {
      setUserData({ id: uid, ...doc.data() });
    })
    .catch((err) => console.log(err));
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

async function getTeams(uid, setTeams) {
  const teams = [];
  const docReference = doc(usersColRef, uid);
  await getDoc(docReference)
    .then(async (data) => {
      // setUserData({ id: uid, ...doc.data() });
      const teamsCount = data.data().teamsCount;
      for (let i = 1; i <= teamsCount; i++) {
        let docReference = doc(teamsColRef, uid + "_" + i.toString());
        await getDoc(docReference)
          .then((doc) => {
              teams.push({ id: uid, ...doc.data() });
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
  setTeams([...teams]);
}

async function getTeamMembers(team, setTeamMembers) {
    const members = []
    for (let i = 0; i < team.members.length; i++) {
        const docReference = doc(usersColRef, team.members[i]);
        await getDoc(docReference)
        .then((doc) => {
            members.push({ id: doc.id, ...doc.data() });
        })
        .catch((err) => console.log(err));
    }
    setTeamMembers([...members])
//   getDocs(teamsColRef).then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       console.log(doc.data());
//       console.log(doc.id);
//     });
//   });
}

function getContributions() {
  getDocs(contributionsColRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
    });
  });
}

export { getUser, getOrganisation, getTeams, getTeamMembers, getContributions };
