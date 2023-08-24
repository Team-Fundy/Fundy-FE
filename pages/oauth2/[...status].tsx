import { access } from 'fs';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { accesstokenState, refreshtokenState, loginState } from '@/recoil/recoilstate'

const Post = () => {
    const [grant, setGrant] = useState(null);
    const [accesstoken, setAccesstoken] = useRecoilState<string>(accesstokenState);
    const [refreshtoken, setRefreshtoken] = useRecoilState<string>(refreshtokenState);
    const [onlogin, setOnLogin] = useRecoilState<Boolean>(loginState);

    const router = useRouter();
    const queryParamValue = router.query;

    useEffect(() => {
        if (queryParamValue.status != undefined) {
            if (queryParamValue.status[0] === "success") {
                if (queryParamValue.first === 'true') {
                    setAccesstoken(queryParamValue.access);
                    setRefreshtoken(queryParamValue.refresh);
                    setOnLogin(true);
                    router.push('/oauth2/authsignup');
                }
                else {
                    window.opener.parentCallback();
                    window.close();
                }
            }
        }
    }, [queryParamValue]);
    return (
        <div>
            {
            }
        </div >
    )
}

export default Post