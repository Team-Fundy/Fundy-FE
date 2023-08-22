import { access } from 'fs';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
    const [access, setAccess] = useState<String>(null);
    const [refresh, setRefresh] = useState(null);
    const [grant, setGrant] = useState(null);
    const [first, setFirst] = useState(null);

    const router = useRouter();
    const queryParamValue = router.query;
    useEffect(() => {
        console.log(router);
        if (queryParamValue.status != undefined) {
            if (queryParamValue.status[0] === "success") {
                setAccess(queryParamValue.access);
                setRefresh(queryParamValue.refresh);
                setGrant(queryParamValue.grant);
                setFirst(queryParamValue.first);
                console.log(queryParamValue);
                alert(queryParamValue.first);

                if (queryParamValue.first === 'false') {
                    router.push('/oauth2/authsignup');
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