import express from "express";
import {
  createNewWorkout,
  deleteWorkout,
  getWorkoutById,
  getWorkouts,
  updateWorkout,
} from "../controllers/workout.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();
router.use(requireAuth);
// GET SINGLE AND ALL WORKOUTS
router.get("/", getWorkouts);
router.get("/:id", getWorkoutById);
// CREATE A NEW WORKOUT
router.post("/new", createNewWorkout);
// DELETE
router.delete("/:id", deleteWorkout);
// UPDATE
router.patch("/:id", updateWorkout);
export default router;
