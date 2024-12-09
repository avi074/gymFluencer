import groupedImages from "../utils/images"

/**
 * @typedef Feature
 * @property {string} imgSrc
 * @property {string} title
 * @property {string} description
 */

/** @type {string[]} */
const images = groupedImages["features"].map((img) => img.src)

/** @type {Feature[]} */
const features = [
  {
    imgSrc: images[0],
    title: "Effortless Workout Logging",
    description: `Easily log your workouts and monitor your progress over time with
              our intuitive logging feature. Stay organized and track your
              fitness journey with precision.`,
  },
  {
    imgSrc: images[1],
    title: "Accurate Rep Counting",
    description: `Count your reps accurately with our app, ensuring each workout is
              tracked effectively. Perfect for maintaining consistency and
              improving your performance.`,
  },
  {
    imgSrc: images[2],
    title: "Calorie Calculation Made Easy",
    description: `Calculate calories burned during your workouts to help manage your
              fitness goals. Our app provides precise data to keep you informed
              and motivated.`,
  },
  {
    imgSrc: images[3],
    title: "Personalized Workout Plan",
    description: `An AI-powered personalized workout plan adapts exercises to your
              fitness level, goals, and progress, helping you stay motivated and
              achieve results faster.`,
  },
  {
    imgSrc: images[4],
    title: "Personalized Diet plan",
    description: `An AI diet plan customizes meals to your health goals,
              preferences, and lifestyle, offering tailored, nutritious
              suggestions to support optimal wellness.`,
  },
]

export default features
