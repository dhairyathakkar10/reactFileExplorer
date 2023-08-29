import { useState } from "react";
import "./Folder.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Folder = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="folderWrapper">
      <span
        className="rotate"
        onClick={() => {
          props.toggle(props.folderData, props.folderData.id);
          setToggle(!toggle);
        }}
      >
        {toggle ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
      </span>
      <span>{props.folderData.name}</span>

      {props.inputName !== "" ? (
        <span>
          <span
            className="createFolderBtn"
            onClick={() => props.addFolder(props.store, props.folderData.id)}
          >
            &#128193;
          </span>
          <span
            className="createFileBtn"
            onClick={() => props.addFile(props.store, props.folderData.id)}
          >
            &#128196;
          </span>
        </span>
      ) : (
        ""
      )}

      <span
        className="deleteBtn"
        onClick={() =>
          props.deleteElem(
            props.store,
            props.folderData.id,
            props.folderData.parentNodeId
          )
        }
      >
        &#x2715;
      </span>
      <span
        className="rename"
        onClick={() =>
          props.rename(
            props.store,
            props.folderData.id,
            props.folderData.parentNodeId
          )
        }
      >
        &#9998;
      </span>
    </div>
  );
};
export default Folder;
