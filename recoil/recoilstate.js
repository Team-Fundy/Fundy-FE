import { atom } from 'recoil';


export const loginState = atom({
    key: 'loginState',
    default: false,
    dangerouslyAllowMutability: true,
});
export const accesstokenState = atom < String > ({
    key: 'accesstokenState',
    default: null,
    dangerouslyAllowMutability: true,
});
export const refreshtokenState = atom < String > ({
    key: 'refreshtokenState',
    default: null,
    dangerouslyAllowMutability: true,
});
