import Workout from "../models/WorkoutSchema.js";
import mongoose from "mongoose";

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ success: false, data: err });
  }
};

export const createNewWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ success: false, data: err });
  }
};

export const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: `No such workout!` });
    }
    const workout = await Workout.findById(id);

    if (!workout) {
      return res
        .status(404)
        .json({ success: false, message: `No such workout!` });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: `No such workout!` });
    }
    const workout = await Workout.findByIdAndDelete({ _id: id });

    if (!workout) {
      return res
        .status(404)
        .json({ success: false, message: `No such workout!` });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: `No such workout!` });
    }
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!workout) {
      return res
        .status(404)
        .json({ success: false, message: `No such workout!` });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
