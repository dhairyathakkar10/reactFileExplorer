import { useState } from "react";
import "./Folder.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import { addFile1, addFolder1, deleteElement, handleInput, renameElem, toggleElement } from "../../redux/fileExplorerSlice";
const Folder = (props) => {
  const [toggle, setToggle] = useState(false);
  let dispatch = useDispatch();
  let state = useSelector((state) => state.fileExplorer);

  return (
    <div className="folderWrapper" key={props.folderData.id}>
      <span
        className="rotate"
        onClick={() => {
          dispatch(toggleElement({ folderData: props.folderData }));
          setToggle(!toggle);
        }}
      >
        {toggle ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
      </span>
      <span>{props.folderData.name}</span>
      {state.fName !== "" ? (
        <span>
          <span
            className="createFolderBtn"
            onClick={() => {
              dispatch(addFolder1({ state, id: props.folderData.id }));
            }}
          >
            &#128193;
          </span>
          <span
            className="createFileBtn"
            onClick={() => {
              dispatch(addFile1({ state, id: props.folderData.id }));
            }}
          >
            &#128196;
          </span>
        </span>
      ) : (
        ""
      )}

      <span
        className="deleteBtn"
        onClick={() => {
          dispatch(
            deleteElement({
              state,
              id: props.folderData.id,
              parentNodeId: props.folderData.parentNodeId,
            })
          );
        }}
      >
        &#x2715;
      </span>
      <span
        className="rename"
        onClick={() => {
          dispatch(
            renameElem({
              state,
              id: props.folderData.id,
              parentNodeId: props.folderData.parentNodeId,
            })
          );
        }}
      >
        &#9998;
      </span>
    </div>
  );
};
export default Folder;
