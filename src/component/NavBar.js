import React, { useContext } from "react";
import { Box, Button, Center, Image, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { MemberLogin } from "../page/memberLogin/MemberLogin";
import { LoginContext } from "./LoginProvider";

export function NavBar() {
  const { fetchLogin, isAuthenticated, disConnect } = useContext(LoginContext);

  const navigate = useNavigate();
  const toast = useToast();

  function handleLogout() {
    axios
      .post("/api/member/logout")
      .then(() => {
        toast({
          description: "로그아웃 되었습니다🙂",
          status: "info",
        });
        disConnect();
        navigate("/");
      })
      .finally(() => {
        fetchLogin();
      });
  }

  return (
    <>
      <Box mt={10}>
        <Center>
          <MemberLogin />
          {isAuthenticated() && (
            <Button colorScheme="purple" onClick={handleLogout}>
              로그아웃
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Button>
          )}
        </Center>
      </Box>
    </>
  );
}

export default NavBar;
