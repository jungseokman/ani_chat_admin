import AdminLayout from "@/components/AdminLayout";
import {
  CenteredPaginationTable,
  Text,
  Wrapper,
} from "@/components/commomComponents";
import Theme from "@/components/Theme";
import useInput from "@/hooks/useInput";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Drawer, Input, Select } from "antd";
import { useCallback, useState } from "react";

const User = () => {
  //////* USESTATE //////
  const [noticeDetailOpen, setNoticeDetailOpen] = useState(false);

  const name = useInput("");
  const nickname = useInput("");
  const age = useInput("");

  //////* HANDLER //////
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "NOTICE",
      icon: <ExclamationCircleFilled />,
      content: "정말 회원을 삭제하시겠어요?",
      okText: "삭제",
      okType: "danger",
      cancelText: "취소",
      onOk() {},
    });
  };

  const noticeDetailHandler = useCallback(
    (value) => {
      setNoticeDetailOpen((prev) => !prev);
    },
    [noticeDetailOpen]
  );

  //////* DATAVIEW //////

  const userColumns = [
    {
      title: "No",
      dataIndex: "ID",
      align: "center",
    },

    {
      title: "닉네임",
      dataIndex: "nickname",
      ellipsis: true,
    },
    {
      title: "이메일",
      dataIndex: "email",
      ellipsis: true,
    },
    {
      title: "성별",
      dataIndex: "gender",
    },
    {
      title: "나이",
      dataIndex: "age",
    },
    {
      title: "생성일",
      dataIndex: "createAt",
    },
    {
      title: "최근 수정일",
      dataIndex: "updateAt",
    },

    {
      title: "상세보기",
      render: (data) => {
        return (
          <Button onClick={() => noticeDetailHandler(data)}>상세보기</Button>
        );
      },

      align: "center",
    },
    {
      title: "수정하기",
      render: (data) => {
        return (
          <Button type="primary" onClick={() => noticeDetailHandler(data)}>
            수정하기
          </Button>
        );
      },

      align: "center",
    },
    {
      title: "삭제하기",
      render: (data) => {
        return (
          <Button
            danger
            type="primary"
            onClick={() => showDeleteConfirm(data.ID)}
          >
            삭제하기
          </Button>
        );
      },

      align: "center",
    },
  ];

  return (
    <AdminLayout
      content={
        <Wrapper
          width="calc(100% - 60px)"
          padding="25px 30px 35px 30px"
          al="start"
        >
          <Text fontSize="25px" fontWeight="bold">
            회원 관리
          </Text>

          <Wrapper>
            <Wrapper dr="row" ju="space-between">
              <Wrapper
                width="auto"
                dr="row"
                ju="start"
                al="end"
                margin="10px 0 0"
              >
                <Wrapper width="auto" al="start" margin="0 10px 10px 0">
                  <Text fontSize="12px">유형</Text>
                  <Select
                    value={null}
                    style={{ width: 240, margin: "5px 0 0 0" }}
                    onChange={null}
                    options={[
                      {
                        value: "전체",
                        label: "전체",
                      },
                      {
                        value: "테스트1",
                        label: "테스트1",
                      },
                      {
                        value: "테스트2",
                        label: "테스트2",
                      },
                      {
                        value: "테스트3",
                        label: "테스트3",
                      },
                    ]}
                  />
                </Wrapper>

                <Wrapper width="auto" al="start" margin="0 10px 10px 0">
                  <Button
                    type="primary"
                    style={{ width: "90px", margin: "5px 0 0" }}
                    onClick={null}
                  >
                    검색
                  </Button>
                </Wrapper>
                <Wrapper width="auto" al="start" margin="0 10px 10px 0">
                  <Button
                    style={{ width: "90px", margin: "5px 0 0" }}
                    onClick={null}
                  >
                    초기화
                  </Button>
                </Wrapper>
              </Wrapper>
              <Wrapper width="auto" al="start" margin="10px 0 0">
                <Button
                  type="primary"
                  style={{ width: "150px", margin: "5px 0 0" }}
                  onClick={() => noticeDetailHandler()}
                >
                  생성하기
                </Button>
              </Wrapper>
            </Wrapper>
            <Wrapper
              height="1px"
              bgColor={Theme.grey2_C}
              margin="10px 0"
            ></Wrapper>
            <Wrapper dr="row" ju="space-between">
              <Wrapper dr="row" width="auto">
                <Text fontWeight="bold">회원 리스트</Text>
                <Text margin="0 0 0 20px" color={Theme.grey3_C}>
                  {`${0}개`}
                </Text>
              </Wrapper>
            </Wrapper>

            <CenteredPaginationTable
              rowKey="ID"
              columns={userColumns}
              dataSource={[]}
              size="small"
              style={{ width: "100%", margin: "20px 0 0 0" }}
              //   pagination={{
              //     current: currentPage,
              //     pageSize: 10,
              //     total: totalNotice,
              //     onChange: paginationHandler,
              //   }}
            />
          </Wrapper>

          {/* 드로워 샘플 */}
          <Drawer
            title={
              <Text fontSize="20px" fontWeight="bold">
                {`회원 관리 > 회원 생성`}
              </Text>
            }
            onClose={() => noticeDetailHandler(null)}
            open={noticeDetailOpen}
            width={`500px`}
          >
            <Wrapper al="start" ju="start">
              <Text fontSize="18px" fontWeight="500">
                회원 정보 입력
              </Text>

              <Text margin="20px 0 0" fontWeight="500">
                닉네임
              </Text>
              <Input
                placeholder="닉네임를 입력해 주세요."
                readOnly
                style={{ marginTop: "5px", width: "100%" }}
                {...nickname}
              />
              <Text margin="20px 0 0" fontWeight="500">
                이름
              </Text>
              <Input
                placeholder="이름을 입력해 주세요."
                readOnly
                style={{ marginTop: "5px", width: "100%" }}
                {...name}
              />
              <Text margin="20px 0 0" fontWeight="500">
                성별
              </Text>
              <Input
                placeholder="위치를 입력해 주세요."
                readOnly
                style={{ marginTop: "5px", width: "100%" }}
                {...age}
              />
              <Button
                type="primary"
                style={{ marginTop: "30px", width: "100%" }}
                size="large"
                onClick={null}
              >
                회원 생성
              </Button>
            </Wrapper>
          </Drawer>
        </Wrapper>
      }
    />
  );
};

export default User;
