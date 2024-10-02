import { LogoutOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, message } from "antd";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { Text, Wrapper } from "./commonComponents";
import Theme from "./Theme";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("회원 관리", "/admin/user", <UserOutlined />),
  getItem("미소녀 관리", "/admin/lolita", <SmileOutlined />),
];

const AdminLayout = ({ content }) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("ani_chat_login");
    if (!isLoggedIn) {
      router.push("/");
      message.info("로그인이 필요합니다.");
    }
  }, []);

  const onMenuClick = (item) => {
    router.push(item.key);
  };

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("ani_chat_login");
    moveLinkHandler("/");
  }, []);

  const moveLinkHandler = useCallback((link) => {
    router.push(link);
  }, []);

  const selectedKey =
    items.find((item) => item.key === router.pathname)?.key || "/";

  return (
    <Wrapper>
      <Wrapper
        $height="33px"
        $bgColor={Theme.subTheme_C}
        $dr="row"
        $ju="space-between"
      >
        <Text
          $color={Theme.white_C}
          $fontSize="12px"
          $fontWeight="300"
          $margin="0 0 0 20px"
        >
          미소녀 채팅 관리자 페이지 입니다.
        </Text>
        <LogoutOutlined
          onClick={logoutHandler}
          style={{
            color: Theme.white_C,
            fontSize: "13px",
            marginRight: "20px",
          }}
        />
      </Wrapper>
      <Wrapper $dr="row" $ju="start" $height="calc(100vh - 33px)">
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[selectedKey]}
          items={items}
          onClick={onMenuClick}
          style={{
            width: "180px",
            height: "calc(100vh - 33px)",
          }}
        />
        <Wrapper
          $width="calc(100vw - 195px)"
          $height="calc(100vh - 33px)"
          $ju="start"
          $al="start"
        >
          {content}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default AdminLayout;
