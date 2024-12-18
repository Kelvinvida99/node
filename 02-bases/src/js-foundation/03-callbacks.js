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
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callback(`user with id ${id} not found`);
  }

  return callback(null, user);
}

module.exports = {
  getUserById,
};
