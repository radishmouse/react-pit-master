

// move this to a global config
// because foodchooser does not necessarily need
// to know the min/max/target temps per food

// or, food choices could be passed in by the app...
// though still held in global file

// why?
// because the food chooser should not be tied to a specifically named
// config.
// maybe the app should pass in an array of objects with an id and name


const RECIPES = {
  'brisket': {
    target: 205,
    oven: 250,
    factor: 0.003
  },
  'ribs': {
    target: 160,
    oven: 275,
    factor: 0.013
  },
  'wings': {
    target: 165,
    oven: 300,
    factor: 0.079
  },
  'veggie burger': {
    target: 130,
    oven: 300,
    factor: 0.109
  },
  'portobello': {
    target: 130,
    oven: 280,
    factor: 0.199
  },
  'tempeh': {
    target: 130,
    oven: 280,
    factor: 0.18
  },
};

const FOOD_CHOICES = Object.keys(RECIPES);

const tempsForFood = (key) => ({
  target: RECIPES[key].target,
  oven: RECIPES[key].oven
});
const cookFactorForFood = (key) => RECIPES[key].factor;

const ROOM_TEMP = 45;

export { 
  FOOD_CHOICES, 
  tempsForFood,
  cookFactorForFood,
  ROOM_TEMP
};