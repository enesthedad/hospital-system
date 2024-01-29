import { React, useEffect } from "react";
import Navbar from "../components/Navbar";
import WorkoutElement from "../components/WorkoutElement";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:8000/api/v1", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);
  console.log(workouts);
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen overflow-auto">
        <div className="w-3/4 h-a bg-stone-200 p-4 flex flex-col gap-5">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutElement key={workout._id} workout={workout} />
            ))}
        </div>

        <div className="w-1/4 h-a">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
