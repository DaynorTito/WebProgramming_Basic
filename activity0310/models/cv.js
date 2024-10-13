// prettier Eslint

function getCV() {
  const personalInformation = {};
  const workExperience = {};
  const professionalTraining = {};

  const skills = [
    {
      name: "Javascript",
      level: 8,
    },
    {
      name: "Java",
      level: 9,
    },
    {
      name: "MySQL",
      level: 8,
    },
  ];

  return {
    skills,
    personalInformation,
    professionalTraining,
    workExperience,
  };
}
