import { useRef } from "react";

type GenreSelectListModalType = {
    selectedGenre: Array<string>;
    setSelectedGenre: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export default function GenreSelectListModal({ selectedGenre, setSelectedGenre }: GenreSelectListModalType) {

    const genreCategory = ['AR/VR', '레이싱', '롤플레잉', '보드', '슈팅', '스포츠', '시뮬레이션', '액션', '어드벤처', '음악', '전략', '카드', '캐주얼', '퍼즐', '싱글플레이', '멀티플레이'];
    const person_view = ['1인칭', '3인칭'];
    const mood = ['코미디', '로맨스', '공포', '스릴러', 'SF', '판타지', '드라마'];

    function onClickGenreSelectBtn(item: string, event: any) {
        if (selectedGenre.filter((element: string) => element === item).length > 0) {
            setSelectedGenre(selectedGenre.filter((it: string) => it !== item));
            event.target.className = "text-slate-300";
        }
        else {
            setSelectedGenre((its: Array<string>) => [...its, item]);
            event.target.className = "text-violet-600";
        }
        console.log(event.target.className)
    }
    function onClickGenreRemoveBtn(item: string, event: any) {
        event.target.parentElement.querySelector('p').className = event.target.className = "text-slate-300";
        setSelectedGenre(selectedGenre.filter((it: string) => it !== item));
    }

    return (
        <div className="bg-white shadow-md text-center px-16 py-4 relative z-50">
            <p className="py-4 font-bold">카테고리</p>
            <div className="flex gap-4 place-content-center">
                {selectedGenre.map((item: string) => (
                    <div className="flex bg-violet-500 gap-2 rounded-full px-4 text-white">
                        <p className="">{item}</p>
                        <button onClick={(event: React.MouseEvent) => onClickGenreRemoveBtn(item, event)}>X</button>
                    </div>))}
            </div>
            <div className="flex place-content-center gap-16 my-8">
                <div id="cataogry">
                    {genreCategory.map((item, index) => (<div><button className="text-slate-300" name={item} onClick={(e: React.MouseEvent) => onClickGenreSelectBtn(item, e)}>{item}</button></div>))}
                </div>
                <div className="border-l-2 w-2 h-80"></div>
                <div id="view">
                    {person_view.map((item, index) => (<div><button className="text-slate-300" name={item} onClick={(e: React.MouseEvent) => onClickGenreSelectBtn(item, e)}>{item}</button></div>))}
                </div>
                <div className="border-l-2 w-2 h-80"></div>
                <div id="mood">
                    {mood.map((item, index) => (<div><button className="text-slate-300" name={item} onClick={(e: React.MouseEvent) => onClickGenreSelectBtn(item, e)}>{item}</button></div>))}
                </div>
            </div>
        </div>
    );
}

