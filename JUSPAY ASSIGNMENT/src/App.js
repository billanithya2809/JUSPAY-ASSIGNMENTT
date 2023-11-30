import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App({ midAreaLists, updateList }) {
  const classes = useStyles();

  const onDragEnd = (result) => {
    let element = result.draggableId.split("-")[0];

    const oldList = midAreaLists;
    let sourceIndex = oldList.findIndex(
      (x) => x.id === result.source.droppableId
    );

    if (sourceIndex > -1) {
      let compList = oldList[sourceIndex].comps;
      compList.splice(result.source.index, 1);
      oldList[sourceIndex].comps = compList;
    }

    let destIndex = oldList.findIndex(
      (x) => x.id === result.destination.droppableId
    );

    if (destIndex > -1) {
      let destCompList = oldList[destIndex].comps;
      destCompList.splice(result.destination.index, 0, `${element}`);
      oldList[destIndex].comps = destCompList;
    }

    // Dispatch an action to update the list in your Redux store
    // updateList(oldList); // Uncomment this line if you have an action to update the list
  };

  return (
    <div className="bg-blue-100 font-sans">
      <div className="h-screen overflow-hidden flex flex-row pt-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea />
          </div>
          <div className="w-1/3 relative h-screen overflow-scroll flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

// mapping state to props
const mapStateToProps = (state) => {
  return {
    midAreaLists: state.list.midAreaLists,
  };
};

export default connect(mapStateToProps)(App);
