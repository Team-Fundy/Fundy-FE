import { access } from 'fs';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { authPopupState } from '@/recoil/recoilstate'

const Post = () => {
    const [access, setAccess] = useState<String>(null);
    const [refresh, setRefresh] = useState(null);
    const [grant, setGrant] = useState(null);
    const [popup, setPopup] = useRecoilState(authPopupState);

    const router = useRouter();
    const queryParamValue = router.query;

    useEffect(() => {
        if (queryParamValue.status != undefined) {
            if (queryParamValue.status[0] === "success") {
                if (queryParamValue.first === 'false') {
                    router.push('/oauth2/authsignup');
                }
                else
                    window.close();
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