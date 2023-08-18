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

        if (queryParamValue.status != undefined) {
            if (queryParamValue.status[0] === "success") {
                setAccess(queryParamValue.access);
                setRefresh(queryParamValue.refresh);
                setGrant(queryParamValue.grant);
                setFirst(queryParamValue.first);
                console.log(queryParamValue);
                router.push("/");
            }
        }
    }, [queryParamValue]);

    return (
        <div>
            <button>가나다라마바</button>

        </div >
    )
}

export default Post