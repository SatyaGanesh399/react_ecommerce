import React from "react";
import NewsItem from "./newsitem";

const NewsData = [
  {
    imageUrl: "./watch.jpg",
    date: "October 5, 2023",
    itemHeading: "How to choose perfect gadgets",
    itemPara:
      "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper...",
  },
  {
    imageUrl: "./laptopandmobile.jpg",
    date: "October 10, 2023",
    itemHeading: "How to choose perfect gadgets",
    itemPara:
      "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper...",
  },
  {
    imageUrl: "./oculus.jpg",
    date: "October 20, 2023",
    itemHeading: "How to choose perfect gadgets",
    itemPara:
      "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper...",
  },
];

function index() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column w-90 m-auto news-container">
      <div className="margin-20 d-flex align-items-center flex-column">
        <p className="news-heading margin-10">Recent News</p>
        <p className="news-subHeading margin-10">
          There are many variations passages
        </p>
      </div>
      <div className="news-items-container gap-20 d-flex align-items-center justify-content-center flex-wrap">
        {NewsData.map((item) => {
          return (
            <NewsItem
              imageUrl={item.imageUrl}
              date={item.date}
              heading={item.itemHeading}
              para={item.itemPara}
            />
          );
        })}
      </div>
    </div>
  );
}

export default index;
