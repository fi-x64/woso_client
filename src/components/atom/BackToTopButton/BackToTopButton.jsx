import React, { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const BackToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        // Hiển thị nút khi kích thước trang dài hơn 100px
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollButton && (
        <button
          className="to-top-button fixed bottom-8 right-14 z-100 p-4 rounded-full bg-gray-500 text-white hover:opacity-70"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpOutlined />
        </button>
      )}

      {/* Nội dung trang */}
    </>
  );
};

export default BackToTopButton;
