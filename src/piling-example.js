import createPilingJs, { createImageRenderer } from './piling.js';

// prettier-ignore
const items = [
  { src: 'https://i.imgur.com/vpl3gXx.jpg' },
  { src: 'https://i.imgur.com/pGvZTan.jpg' },
  { src: 'https://i.imgur.com/aixQGmV.jpg' },
  { src: 'https://i.imgur.com/RXnfMyC.jpg' },
  { src: 'https://i.imgur.com/Lp0ZNxW.jpg' },
  { src: 'https://i.imgur.com/EUvVhoO.jpg' },
  { src: 'https://i.imgur.com/kYPFr6p.jpg' },
  { src: 'https://i.imgur.com/gaOAias.jpg' },
  { src: 'https://i.imgur.com/u9CuYen.jpg' },
  { src: 'https://i.imgur.com/mlsTZ8H.jpg' }
];

let piling;

const create = async (element, state) => {
  if (Object.keys(state).length !== 0) {
    const piles = piling.get("piles");
    const items = piling.get("items");
    piling.importState(
      {
        ...state,
        piles,
        items,
        itemRenderer: createImageRenderer()
      });
  } else {
    piling = createPilingJs(element, {
      renderer: createImageRenderer(),
      items,
      darkMode: true,
    });
  }
};

export default create;
