import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageCollage() {
  return (
    <ImageList
      sx={{ width: 300, height: 325, marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.8sb4x9sNwZrket2X0goDCgHaDS&pid=Api&P=0&h=180",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://up.yimg.com/ib/th?id=OIP.NQIg0yUAzPoMUE6L3nJgugHaE8&pid=Api&rs=1&c=1&qlt=95&w=151&h=100",
    title: "Burger",
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.l4EUe1FF0428Phudpjoq2AHaFA&pid=Api&P=0&h=180",
    title: "Camera",
  },
  {
    img: "https://up.yimg.com/ib/th?id=OIP.9ujY9m05KmKMBXye1cswAQHaFj&pid=Api&rs=1&c=1&qlt=95&w=146&h=109",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://up.yimg.com/ib/th?id=OIP.jUYIZWSUcK5CxD7JZzhFOgHaHZ&pid=Api&rs=1&c=1&qlt=95&w=103&h=103",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.bIAMfBS4RtcCvazDxzL9kAHaFj&pid=Api&P=0&h=180",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.Of7IKEYe2jhZ441j-FRqzAHaEM&pid=Api&P=0&h=180",
    title: "Basketball",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.2gDB9sBPtiVHt5gJR9U8hQHaD8&pid=Api&P=0&h=180",
    title: "Fern",
  },
];
