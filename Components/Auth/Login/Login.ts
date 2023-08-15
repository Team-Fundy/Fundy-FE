import axios from "axios";

const JWT_EXPIRRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

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
    console.log(response);
    const { accessToken } = response.data;

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

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


const onSilentRefresh = () => {
    axios.post('/silent-refresh', data)
        .then(onLoginSuccess)
        .catch(error => {
            // ... 로그인 실패 처리
        });
}
