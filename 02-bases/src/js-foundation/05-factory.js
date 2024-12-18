
const buildMakePerson = (uuid, getAge) => {
  return ({ name, birthday }) => {
    return {
      id: uuid(),
      name,
      birthday,
      age: getAge(birthday),
    };
  };
}


module.exports = {
  buildMakePerson,
}

/* const obj = { name: "John Doe", birthday: "1999-09-02" };
const john = buildPerson(obj);
console.log({ john }); */

