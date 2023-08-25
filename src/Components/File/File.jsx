import "./File.css";
const File = (props) => {
  return (
    <div className="fileWrapper">
      <span className="rotate">&#10148;</span>
      <span>{props.name}</span>
      <span className="deleteBtn">&#x2715;</span>
      <span className="rename">&#9998;</span>
    </div>
  );
};
export default File;
