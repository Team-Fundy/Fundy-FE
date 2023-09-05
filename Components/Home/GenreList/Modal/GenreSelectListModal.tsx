// export interface SelectedGenres {
//     selectedGenre: Array<string> | undefined;
//     setSelectedGenre: React.Dispatch<React.SetStateAction<Array<string>>> | undefined;
// }

export default function GenreSelectListModal({ selectedGenre, setSelectedGenre }) {

    const genreCategory = ['AR/VR', '레이싱', '롤플레잉', '보드', '슈팅', '스포츠', '시뮬레이션', '액션', '어드벤처', '음악', '전략', '카드', '캐주얼', '퍼즐', '싱글플레이', '멀티플레이'];
    const person_view = ['1인칭', '3인칭'];
    const mood = ['코미디', '로맨스', '공포', '스릴러', 'SF', '판타지', '드라마'];

    function onClickGenreSelectBtn(item: string, event: any) {
        if (selectedGenre.filter((element: string) => element === item).length > 0) {
            setSelectedGenre(selectedGenre.filter((it) => it !== item));
            event.target.className = "";

        }
        else {
            setSelectedGenre((its) => [...its, item]);
            event.target.className = "text-purple-500";
        }
        console.log(event.target.className)
    }
    return (
        <div className="bg-white shadow-md inset-0 z-50 w-96 text-center">
            <p className="">카테고리</p>
            <div className="flex place-content-center gap-4">
                <div id="cataogry">
                    {genreCategory.map((item, index) => (<div><button className="" onClick={(e: any) => onClickGenreSelectBtn(item, e)}>{item}</button></div>))}
                </div>
                <div className="border-l-2 w-2 h-80"></div>
                <div id="view">
                    {person_view.map((item, index) => (<div><button className="" onClick={(e: any) => onClickGenreSelectBtn(item, e)}>{item}</button></div>))}
                </div>
                <div className="border-l-2 w-2 h-80"></div>
                <div id="mood">
                    {mood.map((item, index) => (<div><button className="" onClick={(e: any) => onClickGenreSelectBtn(item, e)}>{item}</button></div>))}
                </div>
            </div>
        </div>
    );
}
