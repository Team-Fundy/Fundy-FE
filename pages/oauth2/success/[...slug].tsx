import { useRouter, } from 'next/router'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    const { params } = useParams();

    useEffect(() => {
        console.log(params);
        if (!params) {

        }
    }, []);

    return (
        <div>
            <button>가나다라마바</button>
            <h1>{pid}</h1>
        </div >
    )
}

export default Post