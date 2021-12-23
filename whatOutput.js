// What will be output?
const Human = {
  isHuman: true,
  hasBrain: () => (Math.random() > 0.9 ? true : false),
  breath: () => {
    if (Math.random() > 0.8) {
      console.log('breath');
      ``;
    } else {
      console.log('😴 ');
    }
  },
};
const User = {
  __proto__: Human,
  name: 'John',
  surname: 'Doe',
  getFullName: () => `${User.name} ${User.surname}`,
};
const Programmer = {
  __proto__: User,
  code: () => {
    if (Math.random() > 0.2) {
      console.log('shit code');
    } else {
      console.log('code that still smells');
    }
  },
};
Programmer.breath(); // => OUTPUT:
