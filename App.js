import "./styles.css";
import Data from "./data.json";
export default function App() {
  return (
    <div className="App">
      <div className="post">
        {Data.map((post) => {
          return (
            <div>
              <p>Roll No: {post.id}</p>
              <p>Student Name: {post.Name}</p>
              <p>Student Address: {post.Address}</p>
              <p>Student Subject: {post.Subject}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
