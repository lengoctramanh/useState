import { Fragment, useState } from "react";

const Test2 = () => {
  /**Tạo một state: colours và một hàm setColours để cập nhật giá trị của state đó */
  const [colours, setColours] = useState(null)
  /**Tạo một hàm khi Click vào đổi màu random */
  const handleChange=()=> {
    /**Tạo mảng màu random */
    const colours=[
        "#fad0c4",
        "#fbc2eb",
        "#ffecd2",
        "#a6c1ee",
        "blue",
        "pink",
        "yellow",
        "red",
        "green",
        "purple",
        "orange",
    ]
    /**Công thức logic để chạy ra mảng màu random */
    const randomColours= colours[Math.floor(Math.random() * colours.length)]
    /**Khi hàm setColours được gọi thì biến randomColours thực thi,tự động tính toán
     * Thiết lập lại giá trị của state:colours,xong cả function componets Test2 đc re-render
     * lại,
       */
    setColours(randomColours)

  }
    
  return (
    <Fragment>
        <h1 style={{color:colours}}>Random colours:{colours}</h1>
      <button onClick={handleChange}>Change random colours</button>
    </Fragment>
  );
};

export default Test2;
