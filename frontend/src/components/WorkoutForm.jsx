import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("http://localhost:8000/api/v1/new", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: { "content-type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setErr(json.data._message);
      console.log();
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setErr("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      console.log(`New workout added`, json);
    }
  };
  return (
    <div className="h-full">
      <form
        className="flex flex-col items-end h-full   gap-4 p-4 bg-stone-300 w-full"
        action="submit"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="workout-title">Workout Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="workout-title"
            type="text"
            className="p-2 rounded-md border-none"
            value={title}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="workout-load">Workout Load(kg)</label>
          <input
            onChange={(e) => setLoad(e.target.value)}
            type="number"
            id="workout-load"
            className="p-2 rounded-md border-none"
            value={load}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="workout-rep">Workout Repeat</label>
          <input
            onChange={(e) => setReps(e.target.value)}
            type="number"
            id="workout-rep"
            className="p-2 rounded-md border-none"
            value={reps}
          />
        </div>
        <button type="submit" className="py-2 px-4 rounded-md bg-green-600">
          Add Workout
        </button>
        {err && <div className="text-red-500">{err}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
