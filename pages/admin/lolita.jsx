import AdminLayout from "@/components/AdminLayout";
import {
  CenteredPaginationTable,
  Text,
  Wrapper,
} from "@/components/commonComponents";
import Theme from "@/components/Theme";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Select } from "antd";

const Lolita = () => {
  //////* HANDLER //////
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "NOTICE",
      icon: <ExclamationCircleFilled />,
      content: "정말 미소녀를 삭제하시겠어요?",
      okText: "삭제",
      okType: "danger",
      cancelText: "취소",
      onOk() {},
    });
  };

  //////* DATAVIEW //////

  const lolitaColumns = [
    {
      title: "No",
      dataIndex: "ID",
      align: "center",
    },

    {
      title: "이름",
      dataIndex: "nickname",
      ellipsis: true,
    },
    {
      title: "스타일",
      dataIndex: "email",
      ellipsis: true,
    },
    {
      title: "사이즈",
      dataIndex: "gender",
    },
    {
      title: "성격",
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
        return <Button onClick={() => {}}>상세보기</Button>;
      },

      align: "center",
    },
    {
      title: "수정하기",
      render: (data) => {
        return (
          <Button type="primary" onClick={() => {}}>
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
          $width="calc(100% - 60px)"
          $padding="25px 30px 35px 30px"
          $al="start"
        >
          <Text $fontSize="25px" $fontWeight="bold">
            미소녀 관리
          </Text>

          <Wrapper>
            <Wrapper $dr="row" $ju="space-between">
              <Wrapper
                $width="auto"
                $dr="row"
                $ju="start"
                $al="end"
                $margin="10px 0 0"
              >
                <Wrapper $width="auto" $al="start" $margin="0 10px 10px 0">
                  <Text $fontSize="12px">유형</Text>
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

                <Wrapper $width="auto" $al="start" $margin="0 10px 10px 0">
                  <Button
                    type="primary"
                    style={{ width: "90px", margin: "5px 0 0" }}
                    onClick={null}
                  >
                    검색
                  </Button>
                </Wrapper>
                <Wrapper $width="auto" $al="start" $margin="0 10px 10px 0">
                  <Button
                    style={{ width: "90px", margin: "5px 0 0" }}
                    onClick={null}
                  >
                    초기화
                  </Button>
                </Wrapper>
              </Wrapper>
              <Wrapper $width="auto" $al="start" $margin="10px 0 0">
                <Button
                  type="primary"
                  style={{ width: "150px", margin: "5px 0 0" }}
                  onClick={null}
                >
                  생성하기
                </Button>
              </Wrapper>
            </Wrapper>
            <Wrapper
              $height="1px"
              $margin="10px 0"
              $bgColor={Theme.grey2_C}
            ></Wrapper>
            <Wrapper $dr="row" $ju="space-between">
              <Wrapper $dr="row" $width="auto">
                <Text $fontWeight="bold">미소녀 리스트</Text>
                <Text $margin="0 0 0 20px" $color={Theme.grey3_C}>
                  {`${0}개`}
                </Text>
              </Wrapper>
            </Wrapper>

            <CenteredPaginationTable
              rowKey="ID"
              columns={lolitaColumns}
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
        </Wrapper>
      }
    />
  );
};

export default Lolita;
