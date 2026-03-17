import React from "react";
import TextType from "./TextType";

const TextTypeStyle = () => {
  return (
    <div>
      {" "}
      <TextType
       // texts={["Text typing effect", "for your websites", "Happy coding!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        text={[
          "Building modern web interfaces ",
          "Along with amazing experiences!",
        ]}
        deletingSpeed={50}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={0.5}
      />
    </div>
  );
};

export default TextTypeStyle;
