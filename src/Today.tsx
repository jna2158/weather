import "./Today.css";

export default function Today() {
  // const obj: object = {
  //   0: "Sunday",
  //   1: "Monday",
  //   2: "Tuesday",
  //   3: "Wednesday",
  //   4: "Thursday",
  //   5: "Friday",
  //   6: "Saturday",
  // };
  const arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDate = () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일

    return `${arr[day]}, ${month}th ${date} ${year}`;
  };
  return <div>{getDate()}</div>;
}
