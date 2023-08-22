import { atom } from 'recoil';

export const authPopupState = atom < Window | undefined > ({
    key: 'authPopupState',
    default: undefined,
});