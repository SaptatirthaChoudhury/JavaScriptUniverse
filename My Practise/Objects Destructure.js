const Objects = {
  piano: 500,
  stereo: 300,
  marvel: { hero1: "Dr.Strange", hero2: "Thor" },
  dc: { hero3: "Batman", hero4: "Wonder women" },
  villain: { villain1: "Dr.Doom", villain2: "Kang" },
};

// Combine the initial object with the new key-value pair

//const {piano, marvel } = Objects

//console.log(marvel);

const navbar = ({ marvel, villain }) => {
  console.log(marvel.hero1, villain);
};

navbar(Objects);

//console.log(Objects);
