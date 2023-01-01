import { atom } from 'recoil';

export const commentModalAtom = atom({
  key: 'commentModal',
  default: false,
});

export const createVideoModalAtom = atom({
  key: 'createVideoModal',
  default: false,
});
