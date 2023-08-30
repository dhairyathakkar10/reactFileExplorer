import { deleteElement, renameElem } from "../../redux/fileExplorerSlice";
import { useDispatch, useSelector } from "react-redux";
import "./File.css";
const File = (props) => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.fileExplorer);
  let id = props.fileData.id;
  return (
    <div className="fileWrapper" key={props.fileData.id}>
      <span>{props.fileData.name}</span>
      <span
        className="deleteBtn"
        onClick={() => {
          dispatch(
            deleteElement({
              state,
              id,
              parentNodeId: props.fileData.parentNodeId,
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
              id,
              parentNodeId: props.fileData.parentNodeId,
            })
          );
        }}
      >
        &#9998;
      </span>
    </div>
  );
};
export default File;
