import axios from "axios";

const JWT_EXPIRRY_TIME = 2 * 3600 * 1000; // 만료 시간 2시간 

export const onLogin = (email: string, password: string) => {

    const data = {
        email,
        password,
    };
    axios.post('/api/user/login', data)
        .then(onLoginSuccess)
        .catch(onLoginFail);
}

const onLoginSuccess = (response: any) => {
    console.log(response.data.result);
    const { accessToken } = response.data.result;

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    console.log(accessToken);
    setTimeout(onSilentRefresh, JWT_EXPIRRY_TIME - 60000);
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
