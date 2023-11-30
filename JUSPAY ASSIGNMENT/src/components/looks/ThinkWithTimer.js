import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const CustomThinkWithTimer = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  /* Display Think Message with Timer */
  const handleDisplayMessage = () => {
    const messageBox = document.getElementById(`${character.active}-message-box`);
    const messageBox1 = document.getElementById(`${character.active}-message-box1`);

    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      messageBox.style.display = "none";
      messageBox1.style.display = "none";
      return;
    }

    setState({ ...state, show_msg: true });
    messageBox.style.display = "inline-block";
    messageBox.style.position = "relative";

    messageBox1.style.display = "block";
    messageBox1.style.position = "relative";

    messageBox.innerHTML = state.timer_message;

    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      messageBox.style.display = "none";
      messageBox1.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <Paper elevation={3}>
      <div className="rounded text-center bg-purple-700 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timer_message: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Timer:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timer_for_msg: parseInt(e.target.value) });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex flex-row flex-wrap text-center bg-yellow-400 text-black px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => handleDisplayMessage()}
        >
          {`Think ${state.timer_message}`}
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

export default connect(mapStateToProps)(CustomThinkWithTimer);
