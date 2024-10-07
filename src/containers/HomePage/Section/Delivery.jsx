import { Divider, Steps } from "antd";
import React from "react";
import "./Delivery.scss";
import StepBar from "../../../components/atom/StepBar/StepBar";

function Delivery() {
  const data = [
    {
      id: 1,
      title: "Liên hệ và lấy hàng",
      description:
        "Khách hàng có thể liên hệ với tụi mình qua fanpage hoặc trang web để đặt lịch. Sau khi tiếp nhận yêu cầu, tụi mình sẽ đến lấy tai nghe trong vòng 2 ngày làm việc hoàn toàn miễn phí.",
    },
    {
      id: 2,
      title: "Kiểm tra và chuẩn đoán",
      description:
        "Sau khi nhận hàng, tụi mình sẽ kiểm tra kỹ lưỡng tình trạng tai nghe và đưa ra các gói vệ sinh phù hợp. Mọi bước vệ sinh đều được thực hiện cẩn thận để đảm bảo không ảnh hưởng đến chất âm tai nghe của khách hàng. Khách hàng sẽ được cấp một mã theo dõi để kiểm tra tiến trình xử lý đơn hàng trên trang web của tụi mình.",
    },
    {
      id: 3,
      title: "Giao hàng sau khi vệ sinh",
      description:
        "Sau khi hoàn tất quy trình vệ sinh, chúng tôi sẽ liên hệ để sắp xếp thời gian giao lại tai nghe cho khách hàng. Việc vận chuyển ở cả bước lấy và giao hàng đều hoàn toàn miễn phí.",
    },
  ];

  return (
    <div className="delivery-section">
      <h1 className="heading-5 text-center">Hình thức giao nhận</h1>
      {/* <Steps
        // current={current}
        // onChange={onChange}
        direction="vertical"
        style={{ height: "80vh" }}
        items={[
          {
            title: "Bước 1",
            description: "Liên hệ và lấy hàng",
          },
          {
            title: "Bước 2",
            description: "Kiểm tra và chẩn đoán",
          },
          {
            title: "Bước 3",
            description: "Giao hàng sau khi vệ sinh",
          },
        ]}
      /> */}
      <StepBar step={2} direction={"vertical"} data={data} />
    </div>
  );
}

export default Delivery;
