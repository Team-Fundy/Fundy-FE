import { useRouter } from "next/router";
import axios from "axios";
import { useRecoilState } from 'recoil'
import { accesstokenState, refreshtokenState, loginState } from '@/recoil/recoilstate'


const JWT_EXPIRRY_TIME = 2 * 3600 * 1000; // 만료 시간 2시간 

const [accesstoken, setAccesstoken] = useRecoilState(accesstokenState);
const [refreshtoken, setRefreshtoken] = useRecoilState(refreshtokenState);
const [onlogin, setOnLogin] = useRecoilState(loginState);

const router = useRouter();

export const onEmailLogin = (email: string, password: string) => {

    const data = {
        email,
        password,
    };
    axios.post('/api/user/login', data)
        .then(onLoginSuccess)
        .catch(onLoginFail);
}

export const onOauthLogin = (queryParamValue: any) => {
    SuccessLogin(queryParamValue.access, queryParamValue.refresh);
}

const onLoginSuccess = (response: any) => {
    SuccessLogin(response.data.result.accessToken, response.data.result.refreshToken);
}

const SuccessLogin = (accessToken: string, refreshToken: string) => {
    setAccesstoken(accessToken);
    setRefreshtoken(refreshToken);
    setOnLogin(true);

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    setTimeout(onSilentRefresh, JWT_EXPIRRY_TIME - 60000);
    router.push("/");
}

const onLoginFail = (response: any) => {
    const status = response.response.status;
    switch (status) {
        case 401:
            alert("아이디 또는 패스워드가 틀렸습니다.");
            break;
    }

}

const onRefreshTokenGetFail = (response: any) => {
    const status = response.response.status;

}

export const onUserCheck = () => {
    axios.get('/api/user/info')
        .then(function check(response: any) {
            console.log(response);
        })
        .catch(onRefreshTokenGetFail);
}


const onSilentRefresh = () => {
    axios.get('/api/user/reissue')
        .then(onLoginSuccess)
        .catch(onRefreshTokenGetFail);
}
