import React, { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../../component/LoginProvider";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlay,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PlayComp from "../../component/PlayComp";

export function MyFavoritePlaylist() {
  const { login } = useContext(LoginContext);
  const songListModal = useDisclosure();
  const playDrawer = useDisclosure();
  const toast = useToast();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [list, setList] = useState(null);
  const [index, setIndex] = useState(0);
  const [favoriteList, setFavoriteList] = useState(null);
  const count = useRef(0);

  useEffect(() => {
    params.set("id", login.id);
    axios
      .get("/api/myList/favorite?" + params.toString())
      .then((response) => setList(response.data));
  }, [favoriteList]);

  function handleFavoriteList(listId) {
    axios
      .put("/api/myList/hitscount?id=" + listId, {
        memberId: login.id,
        listId: listId,
      })
      .then(({ data }) => (count.current = data))
      .catch(() => console.log("잘안됨"))
      .finally(() =>
        navigate(
          "/main/songinmyfavoriteplaylist?listId=" +
            listId +
            "&count=" +
            count.current,
        ),
      );
  }

  function handleHitsCount(likelistId) {}

  return (
    <Center mt={50}>
      <Box mt={30}>
        <Heading>{login.nickName} 님의 취향저격 플레이리스트</Heading>
        <Divider />
        <Flex gap={5}>
          {list !== null &&
            list.map((song, idx) => (
              <Box gap={5} key={song?.id}>
                <Box mt={30}>
                  <Card w="xs">
                    <CardHeader height="242px" key={idx}>
                      <Image
                        src={song.photo}
                        alt={song.picture}
                        _hover={{ cursor: "pointer" }}
                        boxSize="220px"
                        objectFit="cover"
                        style={{ margin: "0 auto", display: "block" }}
                        onClick={() => handleFavoriteList(song.listId)}
                      />
                    </CardHeader>
                    {/*<CardHeader _hover={{ cursor: "pointer" }}>*/}
                    {/*  <Image onClick={() => handleFavoriteList(song.listId)} />*/}
                    {/*</CardHeader>*/}
                    <CardBody>
                      <Heading
                        size="md"
                        _hover={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => handleFavoriteList(song.listId)}
                      >
                        {song?.listName}
                      </Heading>
                    </CardBody>
                    <Divider color="gray" />
                    <CardFooter>
                      <FontAwesomeIcon icon={faRecordVinyl} />
                      <Text>{song?.songs} 곡</Text>
                      <Spacer />
                      <Text>작성자 {song?.nickName} 님</Text>
                    </CardFooter>
                  </Card>
                </Box>
              </Box>
            ))}
        </Flex>
      </Box>
    </Center>
  );
}

export default MyFavoritePlaylist;
