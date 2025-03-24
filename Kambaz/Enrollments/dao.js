import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}
export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  const userEnrollments = enrollments.filter((enrollment) => enrollment.user === userId);
  return userEnrollments;
}
export function getEnrollments() {
    return Database.enrollments;
  }
export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(e => !(e.user === userId && e.course === courseId));
}
  