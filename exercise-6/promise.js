function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

const getStudents = function (resolve) {
  const timeout = randomIntFromInterval(1, 2);
  setTimeout(
    () =>
      console.log(`getStudents:${timeout}`) ||
      resolve([
        { name: "Dupont", cours: [1, 3, 5] },
        { name: "Lea", cours: [2, 4] },
        { name: "Charles", cours: [1] },
      ]),
    timeout
  );
};

const getCourses = function (resolve) {
  const timeout = randomIntFromInterval(2, 4);
  setTimeout(
    () =>
      console.log(`getCourses:${timeout}`) ||
      resolve([
        { id: 1, name: "JS" },
        { id: 2, name: "PHP" },
        { id: 3, name: "C#" },
        { id: 4, name: "F#" },
        { id: 5, name: "CSS" },
      ]),
    timeout
  );
};

const mapping = function (resolve) {
  const timeout = randomIntFromInterval(1, 4);

  Promise.all([new Promise(getStudents), new Promise(getCourses)]).then(
    (results) => {
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
    }
  );
};

const timer = function (_, reject) {
  setTimeout(() => reject(), 6000);
};

Promise.race([new Promise(mapping), new Promise(timer)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
