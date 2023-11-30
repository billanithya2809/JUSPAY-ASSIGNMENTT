import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

export default function Sidebar() {
  const renderDroppableList = (droppableId, components) => (
    <Droppable droppableId={droppableId} type="COMPONENTS">
      {(provided) => (
        <ul
          className={`${droppableId} my-3`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {components.map((x, i) => (
            <Draggable key={`${x}-${droppableId}`} draggableId={`${x}-${droppableId}`} index={i}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="my-2"
                >
                  {getComponent(x)}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-pink-400 p-2 w-auto">
        Side Bar
      </div>

      {/* Motion */}
      <div className="font-bold"> {"Motion"} </div>
      {renderDroppableList("sideArea-motion", motionComponents)}

      {/* Looks */}
      <div className="font-bold"> {"Looks"} </div>
      {renderDroppableList("sideArea-looks", looksComponents)}

      {/* Events */}
      <div className="font-bold"> {"Events"} </div>
      {renderDroppableList("sideArea-events", eventsComponents)}

      {/* Control */}
      <div className="font-bold"> {"Control"} </div>
      {renderDroppableList("sideArea-control", controlComponents)}
    </div>
  );
}
