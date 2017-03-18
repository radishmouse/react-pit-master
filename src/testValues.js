

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
    name: 'brisket'
  },
  {
    name: 'ribs'
  },
  {
    name: 'wings'
  },
  {
    name: 'veggie burger'
  },
  {
    name: 'portobello'
  },
  {
    name: 'tempeh'
  },
  {
    name: 'oyster'
  },
  {
    name: 'tuna'
  },
  {
    name: 'calamari'
  },
];

export { FOOD_CHOICES };