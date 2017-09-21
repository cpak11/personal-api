const user = {
  name: "chris",
  location: "nova",
  occupations: ["front-end", "web developer", "full-stack"],
  hobbies: [
    {
      name: "videogames",
      type: "moba"
    },
    {
      name: "movies",
      type: "drama"
    }
  ],
  family: [
    {
      name: "hanna",
      relation: "sister",
      gender: "female"
    },
    {
      name: "simon",
      relation: "brotha from another motha",
      gender: "male"
    }
  ],
  restaurants: [
    {
      name: "cheesecake factory",
      type: "family",
      rating: "good"
    },
    {
      name: "gohyang jeip",
      type: "Korean",
      rating: "great"
    }
  ]
}

module.exports = user;
