import {
  //createLibrary,
  //createLibraryFromState,
  createImageRenderer,
  createLibraryAsync
} from 'piling.js';

// prettier-ignore
const items = [
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000253413.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000533739.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000314530.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000418512.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000454273.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000219654.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000558596.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000392493.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000115639.jpg' },
  { src: 'https://storage.googleapis.com/pilingjs/coco-cars/000000228398.jpg' },
];

let piling;

export const create = (el, state) => {
  if(Object.keys(state).length !== 0) {
    const piles = piling.get("piles");
    const items = piling.get("items");
    piling.importState({...state, piles, items, itemRenderer: createImageRenderer()});
  } else {
    piling = createLibraryAsync(el, {
      renderer: createImageRenderer(),
      items,
      darkMode: false,
    }).then(res => {
      piling = res;
    });
  }
  return piling;
};
