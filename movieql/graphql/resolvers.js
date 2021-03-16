const people = [
  {
    name: "Dong",
    age: 27,
    gender: "male",
  },
];

const resolvers = {
  Query: {
    person: () => people,
  },
};

export default resolvers;
