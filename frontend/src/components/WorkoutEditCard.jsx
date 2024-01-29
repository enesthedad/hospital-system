import { useState, React } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
const WorkoutEditCard = ({ handleEdit, workout }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutContext();
  const [updateTitle, setUpdateTitle] = useState(workout.title);
  const [updateLoad, setUpdateLoad] = useState(workout.load);
  const [updateReps, setUpdateReps] = useState(workout.reps);
  const [err, setErr] = useState("");
  const handleUpdateWorkout = async (e) => {
    e.preventDefault();
    const editWorkout = {
      _id: workout._id,
      title: updateTitle,
      load: updateLoad,
      reps: updateReps,
    };
    const response = await fetch(
      `http://localhost:8000/api/v1/${workout._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(editWorkout),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setErr(json.data._message);
      console.log(err);
    }
    if (response.ok) {
      handleEdit();
      setErr("");
      dispatch({ type: "UPDATE_WORKOUT", payload: editWorkout });
      console.log(`workout updated`, json);
    }
  };
  return (
    <div className="bg-stone-600 rounded-md flex justify-between">
      <form className="flex flex-col gap-2 p-4">
        <div className="flex flex-col">
          <label
            htmlFor="update-title"
            className="text-amber-500 text-2xl text-bold"
          >
            Title
          </label>
          <input
            onChange={(e) => setUpdateTitle(e.target.value)}
            type="text"
            id="update-title"
            className="px-2 py-1 rounded-md"
            value={updateTitle}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="update-load" className="text-stone-300">
            Load (kg)
          </label>
          <input
            onChange={(e) => setUpdateLoad(e.target.value)}
            type="number"
            id="update-load"
            className="px-2 py-1 rounded-md"
            value={updateLoad}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="update-reps" className="text-stone-300">
            Reps
          </label>
          <input
            onChange={(e) => setUpdateReps(e.target.value)}
            type="number"
            id="update-reps"
            className="px-2 py-1 rounded-md"
            value={updateReps}
          />
        </div>
      </form>
      <div className="links flex flex-col justify-around p-4 text-white">
        <button
          onClick={handleUpdateWorkout}
          className="bg-green-500 px-2 py-1 rounded-md"
        >
          <i className="fa-solid fa-check"></i>
        </button>
        <button
          onClick={handleEdit}
          className="bg-amber-500 px-2 py-1 rounded-md"
        >
          <i className="fa-solid fa-ban"></i>
        </button>
      </div>
    </div>
  );
};

export default WorkoutEditCard;
