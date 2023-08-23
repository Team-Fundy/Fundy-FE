import { atom } from 'recoil';

export const authPopupState = atom({
    key: 'authPopupState',
    default: null,
    dangerouslyAllowMutability: true,
});