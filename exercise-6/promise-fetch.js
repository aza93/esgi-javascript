function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

const getStudents = function () {
  return fetch("http://localhost:3000/students").then((response) =>
    response.json()
  );
};

const getCourses = function () {
  return fetch("http://localhost:3000/courses").then((response) =>
    response.json()
  );
};

const mapping = function (resolve) {
  const timeout = randomIntFromInterval(4, 8);

  Promise.all([getStudents(), getCourses()]).then((results) => {
    setTimeout(() => {
      console.log(`mapping:${timeout}`);
      const students = results[0],
        courses = results[1];
      resolve(
        students.map((student) => {
          student.cours = student.cours.map((id) =>
            courses.find((cours) => cours.id === id)
          );
          return student;
        })
      );
    }, timeout);
  });
};

const timer = function (_, reject) {
  setTimeout(() => reject(), 6000);
};

Promise.race([new Promise(mapping), new Promise(timer)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
