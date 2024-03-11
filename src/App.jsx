import Counter from "./components/Counter";
import Task from "./components/Task";
import Tasklist from "./components/Tasklist";
import TaskListinner from "./components/tasklist/Tasklist";

const App = () => {
  // const Task = [
  //   { description: "HI Please create your note", rating: 4 },
  //   { description: "HI Please upload your video", rating: 3.5 },
  //   { description: "HI Please upload your images", rating: 4.1 },
  //   { description: "HI Please upload your code on git", rating: 4.2 },
  // ];

  return (
    // <div>
    //   {Task.map((ele, index) => {
    //     return <Tasklist key={index} tD={ele} />;
    //   })}
    // </div>

    <>
      <TaskListinner />
    </>
  );
};

export default App;
