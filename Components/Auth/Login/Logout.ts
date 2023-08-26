import { useRecoilState } from "recoil";
import { loginState } from "@/recoil/recoilstate";
import axios from "axios";


export const onLogout = () => {
    const [logoutState, setLogoutState] = useRecoilState(loginState);
    setLogoutState(false);
    axios.post('/api/user/logout')
        .then(onLogoutSuccess)
        .catch(onLogoutFail);
}

const onLogoutSuccess = () => {
    console.log("*");
}

const onLogoutFail = () => {

}
