import { proxy } from 'valtio';

const state = proxy({
  intro: true, // are we in home page
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;
