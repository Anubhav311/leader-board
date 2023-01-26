import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  getUser,
  getUsers,
  getTeams,
  getTeamMembers,
} from "../database/database";
import { useAuth } from "../context/AuthContext";
import Modal from "react-modal";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Box,
} from "@chakra-ui/react";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import { withProtected } from "../components/ProtectedRoute";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const membersList = [
  {
    name: "Vicky",
    prMerge: 3,
    typeingSpeed: 26,
    keyboardOrMouse: "Low",
    leetcodeScore: 0,
  },
  {
    name: "Sagar",
    prMerge: 3,
    typeingSpeed: 16,
    keyboardOrMouse: "Low",
    leetcodeScore: 0,
  },
  {
    name: "Vikash",
    prMerge: 3,
    typeingSpeed: 7,
    keyboardOrMouse: "Low",
    leetcodeScore: 0,
  },
  {
    name: "Harsh",
    prMerge: 0,
    typeingSpeed: 0,
    keyboardOrMouse: "Low",
    leetcodeScore: 0,
  },
  {
    name: "Saransh",
    prMerge: 0,
    typeingSpeed: 0,
    keyboardOrMouse: "Low",
    leetcodeScore: 0,
  },
];

function bubbleSort(membersList) {
  for (let i = 0; i < membersList.length; i++) {
    for (let j = 0; j < membersList.length - i - 1; j++) {
      if (membersList[j + 1].prMerge >= membersList[j].prMerge) {
        [membersList[j + 1], membersList[j]] = [
          membersList[j],
          membersList[j + 1],
        ];
      }
    }
  }
  return membersList;
}

bubbleSort(membersList);

function Home() {
  const { currentUser, loading, logout } = useAuth();
  const [userData, setUserData] = useState();
  const [members, setMembers] = useState(membersList);
  const [list, setList] = useState([]);
  const uid = currentUser.uid;

  useEffect(() => {
    if (loading == false) {
      getUser(uid, setUserData);
    }
  }, [loading, uid]);

  return (
    <GetTeams uid={uid} members={members} userData={userData} />
  );
}

function GetTeams({ uid, members, userData }) {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getTeams(uid, setTeams);
  }, [uid]);

    return teams.length == 0 ? (
    <Loading/>
  ) : (
    <LeaderBoard members={members} team={teams[0]} />
  );
}

function LeaderBoard({ members, team }) {
  // function LeaderBoard(members, team) {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    getTeamMembers(team, setTeamMembers);
  }, [team]);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Leader Board</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.main}>
          <div className={styles.tableContainer}>
            <div>
              <Heading pb="15px" size="md">
                Epvi Engineering Leader Board
              </Heading>
            </div>
            <Box w="100%" borderWidth="1px" borderRadius="lg" p="15px">
              <TableContainer w="100%">
                <Table variant="simple">
                  <TableCaption>Epvi Engineering Leader Board</TableCaption>
                  <Thead>
                    <Tr>
                      <Th isNumeric>Rank</Th>
                      <Th isNumeric>PR Merge</Th>
                      <Th>Name</Th>
                      <Th isNumeric>Typing Speed</Th>
                      <Th>Keyboard Use</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {teamMembers.map((member, i) => (
                      <MemberRow member={member} key={i} i={i} />
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </div>
          <div
            className={styles.thirdColumn}
            style={{ position: "fixed", right: "30px" }}
          >
            <h3>2022</h3>
            <h3>2022</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function MemberRow({ member, i }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Tr key={i}>
        <Td textAlign={"center"}>{i + 1}</Td>
        <Td textAlign={"center"}>{member.prMerge}</Td>
        <Td>{member.name}</Td>
        <Td textAlign={"center"}>{member.typingSpeed}</Td>
        <Td textAlign={"center"}>{member.keyboardUse}</Td>
        <Td>
          <button onClick={openModal}>edit</button>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <UpdateScore member={member} />
          </Modal>
        </Td>
      </Tr>
    </>
  );
}

function UpdateScore({ member }) {
  const validationSchema = yup.object({
    prmerge: yup.number("enter a number"),
    typingSpeed: yup.number("enter a number"),
    leetcodeScore: yup.number("enter a number"),
    keyboardUse: yup.string("enter a string"),
  });

  const formik = useFormik({
    initialValues: {
      prMerge: member.prMerge,
      typingSpeed: member.typingSpeed,
      leetcodeScore: member.leetcodeScore,
      keyboardUse: member.keyboardUse,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const prMerge = values.prMerge;
      const typingSpeed = values.typingSpeed;
      const leetcodeScore = values.leetcodeScore;
      const keyboardUse = values.keyboardUse;
      console.log(prMerge);
    },
  });

  return (
    <div>
      <div>{member.name}&apos;s Score</div>
      <div
        style={{
          width: "400px",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={formik.handleSubmit}
        >
          <p style={{ fontSize: "14px" }}>PR Merged</p>
          <input
            style={{ width: "50%" }}
            fullWidth
            id="prMerge"
            name="prMerge"
            type="number"
            value={formik.values.prMerge}
            onChange={formik.handleChange}
            error={formik.touched.prMerge && Boolean(formik.errors.prMerge)}
            helperText={formik.touched.prMerge && formik.errors.prMerge}
          />

          <p style={{ fontSize: "14px" }}>Typing Speed</p>
          <input
            style={{ width: "50%" }}
            fullWidth
            id="typingSpeed"
            name="typingSpeed"
            type="number"
            value={formik.values.typingSpeed}
            onChange={formik.handleChange}
            error={
              formik.touched.typingSpeed && Boolean(formik.errors.typingSpeed)
            }
            helperText={formik.touched.typingSpeed && formik.errors.typingSpeed}
          />

          <p style={{ fontSize: "14px" }}>Leetcode Score</p>
          <input
            style={{ width: "50%" }}
            fullWidth
            id="leetcodeScore"
            name="leetcodeScore"
            type="number"
            value={formik.values.leetcodeScore}
            onChange={formik.handleChange}
            error={
              formik.touched.leetcodeScore &&
              Boolean(formik.errors.leetcodeScore)
            }
            helperText={
              formik.touched.leetcodeScore && formik.errors.leetcodeScore
            }
          />

          <p style={{ fontSize: "14px" }}>Keyboard Use</p>
          <input
            style={{ width: "50%" }}
            fullWidth
            id="keyboardUse"
            name="keyboardUse"
            type="text"
            value={formik.values.keyboardUse}
            onChange={formik.handleChange}
            error={
              formik.touched.keyboardUse && Boolean(formik.errors.keyboardUse)
            }
            helperText={formik.touched.keyboardUse && formik.errors.keyboardUse}
          />
          <button
            style={{ width: "50%", marginTop: "15px", borderRadius: "5px" }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}


export default withProtected(Home);
