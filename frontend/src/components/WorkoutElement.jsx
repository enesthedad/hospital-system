import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import WorkoutCard from "./WorkoutCard";
import WorkoutEditCard from "./WorkoutEditCard";
const WorkoutElement = ({ workout }) => {
  const [edit, setEdit] = useState("");
  const { dispatch } = useWorkoutContext();
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = async () => {
    console.log(workout._id);
    const response = await fetch(
      `http://localhost:8000/api/v1/${workout._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return edit ? (
    <WorkoutEditCard handleEdit={handleEdit} workout={workout} />
  ) : (
    <WorkoutCard
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      workout={workout}
    />
  );
};

export default WorkoutElement;
