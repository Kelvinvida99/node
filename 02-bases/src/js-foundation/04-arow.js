const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jene Doe",
  },
];

function getUserById(id, callback) {
  const user = users.find((user) => user.id === id);

  console.log(user);
  

  return user 
  ? callback(null, user) 
  : callback(`user with id ${id} not found`);
}

module.exports = {
  getUserById,
};
