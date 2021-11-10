import React, { useState } from "react";
import Tag from "./Tag";

const TextArea = () => {
  const [tags, setTags] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);

  const createTag = (text) => {
    const tags = text
      .split(",")
      .filter((tag) => tag !== "")
      .map((tag) => tag.trim());
    setTags(tags);
  };

  const handleEnterKeyPress = (event) => {
    createTag(event.target.value);

    if (event.key === "Enter") {
      setTimeout(() => (event.target.value = ""), 10);

      randomSelect();
    }
  };

  function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
      setRandomIndex(pickRandomTag());

      if (randomIndex !== undefined) {
        setHighlight(true);

        setTimeout(() => {
          setHighlight(false);
        }, 100);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        setRandomIndex(pickRandomTag());

        setHighlight(true);
      }, 100);
    }, times * 100);
  }

  function pickRandomTag() {
    const randomIndex = Math.floor(Math.random() * tags.length);
    return randomIndex;
  }

  return (
    <>
      <textarea
        placeholder="Enter choices here..."
        id="textarea"
        onKeyUp={handleEnterKeyPress}
      ></textarea>
      {tags.map(
        (tag, index) =>
          tag !== "" && (
            <Tag
              highlight={
                index === randomIndex && highlight === true ? "highlight" : ""
              }
              key={index}
              tagName={tag}
            />
          )
      )}
    </>
  );
};

export default TextArea;
