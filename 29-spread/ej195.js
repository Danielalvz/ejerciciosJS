const teacherStatus = {
    name: "Nicolas",
    lastName: "Isnardi",
    friends: ["Juan, Pablo, Char"],
    likesJs: true,
  };

  const studentStatus = {
    name: "Dani",
    lastName: "L",
    friends: ["Lucia, Pablo, Susana"]
  }

  const newStatus = {
    ...teacherStatus,
    ...studentStatus
  }

  console.log(newStatus);
  