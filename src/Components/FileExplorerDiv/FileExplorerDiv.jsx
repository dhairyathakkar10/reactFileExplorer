import "./FileExplorerDiv.css";
import Folder from "../Folder/Folder";
import File from "../File/File";

const FileExplorerDiv = ({ store, fileExplorerData, inputName, setData, setFName }) => {
  const toggle = (folderData, id) => {
    console.log(id);
    console.log(folderData);
    folderData.children.forEach((child) => {
      child.visible = !child.visible;
      if (child.type === "folder" && child.children !== []) {
        toggle(child, id);
      }
    });
    setData([...store]);
  };
  return (
    <div>
      {fileExplorerData.map((el) =>
        el.type === "folder" ? (
          <div style={{ paddingLeft: "20px" }}>
            {el.visible && <Folder folderData={el} store={store} toggle={toggle} />}
            {el.children && (
              <FileExplorerDiv fileExplorerData={el.children} store={store} inputName={inputName} setData={setData} setFName={setFName} />
            )}
          </div>
        ) : (
          <div style={{ paddingLeft: "20px" }}>{el.visible && <File fileData={el} />}</div>
        )
      )}
    </div>
  );
};

export default FileExplorerDiv;
