import axios from "axios";

export default function InrollCreateor() {
    axios.put('/api/user/creator').then((response: any) => {
        if (response.success === true)
            alert("크리에이터 전환완료");
    });
}