export default function PopularListComponent() {

    const arr = [1000, 500, 250, 200, 140, 120, 100, 70, 50, 10];

    let brr = arr.map((value, key) => <li key={key}>{value}</li>);

    return (
        <div className="h-full w-full bg-green-200">
            <div className="justify-between flex">
                <p className="my-2 bold">인기리스트</p>
                <p>전체보기</p>
            </div >
            <table >
                <tbody>
                    {
                        arr.map((item, index) => (
                            <tr key={index}>
                                <td>NAME{index + 1}</td>
                                <td>{item}%</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >

    )
} 