import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {LoginContext} from "../../component/LoginProvider";

export function MyInfo() {
  const {login, fetchLogin} = useContext(LoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchLogin();
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <Button fontSize={"1.7rem"}>
          <FontAwesomeIcon icon={faUser} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          {login ? <>{login.nickName} 님 환영합니다</> : "로딩 중..."}
        </PopoverHeader>
        <PopoverBody>
          <Button variant="ghost" onClick={() => navigate("/main/recommended")}>
            추천 플레이리스트
          </Button>
          <br />
          <Button onClick={() => navigate("/main/myplaylist")} variant="ghost">
            나의 재생목록
          </Button>
          <br />
          <Button variant="ghost" onClick={()=>navigate("/main/memberinfo")}>내 정보</Button>
        </PopoverBody>
        <PopoverFooter>로그아웃</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
