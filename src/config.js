

// move this to a global config
// because foodchooser does not necessarily need
// to know the min/max/target temps per food

// or, food choices could be passed in by the app...
// though still held in global file

// why?
// because the food chooser should not be tied to a specifically named
// config.
// maybe the app should pass in an array of objects with an id and name


const FOOD_CHOICES = [
  {
    name: 'brisket',
    target: 205,
    oven: 250
  },
  {
    name: 'ribs',
    target: 160,
    oven: 275
  },
  {
    name: 'wings',
    target: 165,
    oven: 300,
  },
  {
    name: 'veggie burger',
    target: 130,
    oven: 300
  },
  {
    name: 'portobello',
    target: 130,
    oven: 280
  },
  {
    name: 'tempeh',
    target: 130,
    oven: 280
  },
];

export { FOOD_CHOICES };