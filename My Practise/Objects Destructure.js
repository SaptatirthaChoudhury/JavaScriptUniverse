const Objects = {
  piano: 500,
  stereo: 300,
  marvel: { heroes: ["Dr.Strange", "Thor"], villains: ["Dr.Doom", "Kang"] },
  dc: { heroes: ["Batman", "Wonder women"] },

};

// Combine the initial object with the new key-value pair

//const {piano, marvel } = Objects

//console.log(marvel);

const navbar = ({ marvel, dc }) => {
  console.log(marvel.heroes, dc.heroes);
};

navbar(Objects);

//console.log(Objects);
