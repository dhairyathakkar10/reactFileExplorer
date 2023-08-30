import "./FileExplorerDiv.css";
import Folder from "../Folder/Folder";
import File from "../File/File";

const FileExplorerDiv = ({ fileExplorerData }) => {
  return (
    <div>
      {fileExplorerData.map((el) =>
        el.type === "folder" ? (
          <div style={{ paddingLeft: "20px" }}>
            {el.visible && <Folder folderData={el} />}
            {el.children && <FileExplorerDiv fileExplorerData={el.children} />}
          </div>
        ) : (
          <div style={{ paddingLeft: "20px" }}>{el.visible && <File fileData={el} />}</div>
        )
      )}
    </div>
  );
};

export default FileExplorerDiv;
