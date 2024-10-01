import Theme from "@/components/Theme";
import {
  CommonButton,
  Image,
  Text,
  Wrapper,
} from "@/components/commomComponents";
import useInput from "@/hooks/useInput";
import wrapper from "@/store/store";
import { Input, message } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { END } from "redux-saga";
import styled from "styled-components";

const WrapperStyle = styled(Wrapper)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Login = () => {
  //////? HOOK //////
  const router = useRouter();
  const id = useInput("");
  const password = useInput("");

  //////? USEEFFECT //////

  //////? HANDLER //////
  const loginHandler = useCallback(() => {
    if (id.value === "admin" && password.value === "admin123") {
      localStorage.setItem("ani_chat_login", "true");
      moveLinkHandler("/admin/user");
    } else {
      message.error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  }, [id.value, password.value]);

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  return (
    <Wrapper dr="row" height="100vh">
      <Wrapper width="50%">
        <Image
          height={`100vh`}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZfOGmD8PA8eNW4jHUngJ-SaX5-dNgzs52g&s"
        ></Image>
      </Wrapper>
      <Wrapper
        width="50%"
        height="100%"
        bgImg={
          "url(https://crepe.land/portfolio/0/00/00ylo5dj24k6nmzgdauvu9ckcp4vnm5v_IMG_8249.jpeg)"
        }
      >
        <WrapperStyle
          width="auto"
          bgColor={Theme.white_C}
          padding="35px 70px"
          border={`1px solid ${Theme.basicTheme_C}`}
          al="start"
          radius="10px"
        >
          <Wrapper
            fontSize="25px"
            borderBottom={`1px solid ${Theme.basicTheme_C}`}
            fontWeight="600"
            height="40px"
            color={Theme.subTheme_C}
          >
            미소녀 채팅 관리자 사이트
          </Wrapper>

          <Text margin="25px 0 5px" fontWeight="600">
            관리자 아이디
          </Text>
          <Input
            placeholder="아이디 입력"
            style={{ width: "250px" }}
            {...id}
            size="large"
          />
          <Text fontWeight="600" margin="15px 0 5px">
            비밀번호
          </Text>
          <Input
            placeholder="비밀번호 입력"
            type="password"
            style={{ width: "250px" }}
            size="large"
            {...password}
          />
          <CommonButton
            width="100%"
            margin="20px 0 0"
            type="primary"
            onClick={loginHandler}
            size="large"
          >
            로그인하기
          </CommonButton>
        </WrapperStyle>
      </Wrapper>
    </Wrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    store.dispatch(END);
    console.log("🍀 SERVER SIDE PROPS END");
    await store.sagaTask.toPromise();
  }
);

export default Login;
