import { React, useState } from "react";
import { dateFormatter } from "../utils/dateFormat";
const WorkoutCard = ({ workout, handleDelete, handleEdit }) => {
  const [finished, setFinished] = useState(false);

  return (
    <div
      className={`${
        finished ? "bg-stone-700 text-white line-through" : "bg-stone-600"
      } rounded-md flex justify-between`}
    >
      <div className="flex flex-col gap-5 p-4 text-amber-500 ">
        <h1 className="text-2xl font-bold">{workout.title}</h1>
        <div className="flex gap-5 text-stone-300">
          <h3>Load(kg):{workout.load}</h3>
          <h3>Reps:{workout.reps}</h3>
        </div>
        <h3 className="text-stone-400">{dateFormatter(workout.updatedAt)}</h3>
      </div>
      <div className="links flex flex-col justify-between p-4 text-white">
        {finished ? (
          <button
            onClick={() => setFinished(!finished)}
            className="bg-amber-500 px-2 py-1 rounded-md"
          >
            <i className="fa-solid fa-ban"></i>
          </button>
        ) : (
          <button
            onClick={() => setFinished(!finished)}
            href=""
            className="bg-green-500 px-2 py-1 rounded-md"
          >
            <i className="fa-solid fa-check"></i>
          </button>
        )}
        <button
          onClick={handleEdit}
          className="bg-sky-500 px-2 py-1 rounded-md"
        >
          <i className="fa-solid fa-pen"></i>
        </button>
        <button
          href=""
          onClick={handleDelete}
          className="bg-red-600 px-2 py-1 rounded-md"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
