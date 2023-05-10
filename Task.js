export const Task = (props) => {
  return (
    <div
      className="task"
      style={{
        borderRadius: "5%",
        backgroundColor: props.completed ? "green" : "red",
      }}
    >
      <h1>{props.taskName}</h1>
      <button
        style={{
          borderRadius: "30%",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => props.completeTask(props.id)}
      >
        complete
      </button>
      <button
        style={{
          borderRadius: "30%",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => props.deleteTask(props.id)}
      >
        {" "}
        X Delete Task X
      </button>
    </div>
  );
};
