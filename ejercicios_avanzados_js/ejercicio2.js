const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function average (list){
  const myarr = [];
  let total = 0;

  for(const user of users){
    for(const item in user.favoritesSounds){
      //console.log(user.favoritesSounds[item].volume)
      let volums = user.favoritesSounds[item].volume;
      myarr.push(volums);
    };
  };
  //console.log(myarr)

  for(const nums of myarr){
    total += nums;
  };

  return "la media de volumen de todos los volumenes es " + total / myarr.length;
};

const result = average(users);
console.log(result);
