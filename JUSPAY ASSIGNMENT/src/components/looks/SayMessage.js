import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const CustomSayMessage = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    message: "",
    character_id: "",
  });

  /* Display Message */
  const handleDisplayMessage = () => {
    const messageBox = document.getElementById(`${character.active}-message-box`);
    const messageBox1 = document.getElementById(`${character.active}-message-box1`);

    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      messageBox.style.display = "none";
      return;
    }

    setState({ ...state, show_msg: true });
    messageBox.style.display = "block";
    messageBox.style.position = "relative";

    messageBox1.style.display = "none";

    window.clearTimeout();
    messageBox.innerHTML = state.message;
  };

  return (
    <Paper elevation={3}>
      <div className="rounded text-center bg-purple-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, message: e.target.value });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex text-center flex-row flex-wrap bg-yellow-400 text-black px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => handleDisplayMessage()}
        >
          {`Say ${state.message}`}
        </div>
      </div>
    </Paper>
  );
};

// Mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(CustomSayMessage);
