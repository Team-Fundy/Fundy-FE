import { atom } from 'recoil';


export const loginState = atom({
    key: 'loginState',
    default: true,
    dangerouslyAllowMutability: true,
});
export const accesstokenState = atom({
    key: 'accesstokenState',
    default: "",
    dangerouslyAllowMutability: true,
});
export const refreshtokenState = atom({
    key: 'refreshtokenState',
    default: "",
    dangerouslyAllowMutability: true,
});
