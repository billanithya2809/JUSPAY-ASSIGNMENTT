import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const CustomHideMessage = ({ character, comp_id }) => {
  /* Hide Message */
  const handleHideMessage = () => {
    window.clearTimeout();
    const messageBox = document.getElementById(`${character.active}-message-box`);
    const messageBox1 = document.getElementById(`${character.active}-message-box1`);
    if (messageBox && messageBox1) {
      messageBox.style.display = "none";
      messageBox1.style.display = "none";
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        onClick={() => handleHideMessage()}
        className="rounded bg-purple-700 text-center text-white max-w-content p-1 my-3"
      >
        Hide Message
      </div>
    </Paper>
  );
};

// Mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(CustomHideMessage);
