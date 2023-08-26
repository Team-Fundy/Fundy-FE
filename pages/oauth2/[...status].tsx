import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Post = () => {
    const router = useRouter();
    const queryParamValue = router.query;

    useEffect(() => {
        if (queryParamValue.status != undefined) {
            if (queryParamValue.status[0] === "success") {

                if (queryParamValue.first === 'true') {
                    router.push('/oauth2/authsignup');
                }
                else {
                    window.opener.parentCallback(queryParamValue);
                    window.close();
                }
            }
        }
    }, [queryParamValue]);
    return (
        <div>
        </div>
    )
}

export default Post