
type GenreSelectListModalType = {
    selectedGenre: Array<string>;
    setSelectedGenre: React.Dispatch<React.SetStateAction<Array<string>>>;
    setIsOpenSelectGenreOption: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectCategory({selectedGenre,setSelectedGenre,setIsOpenSelectGenreOption}: GenreSelectListModalType)
{
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
    }
    function onClickGenreRemoveBtn(item: string, event: any) {
        event.target.parentElement.querySelector('p').className = event.target.className = "text-slate-300";
        setSelectedGenre(selectedGenre.filter((it: string) => it !== item));
    }

    function onClickExitBtn()
    {
        setIsOpenSelectGenreOption(false);
    }

    return (
    <div className ="w-[65rem]">
        <div className=" min-h-12 w-full bg-white mb-4 flex justify-between border-2 border-slate-200">
            <div className ="grid grid-cols-9 gap-4 h-12 w-[18r] mx-10">
                {selectedGenre.map((item: string,index) => (
                    <div key ={index} className="flex text-violet-500 gap-2 w-fit h-fit my-auto px-1 rounded-full px-4 bg-[#F5F5F5] drop-shadow-xl text-[0.8rem]">
                        <p className="">{item}</p>
                        <button onClick={(event: React.MouseEvent) => onClickGenreRemoveBtn(item, event)}>X</button>
                    </div>))}
            </div>
            <button className ="mr-6" onClick={()=>setIsOpenSelectGenreOption(false)}>
                내리기
            </button>
        </div>
        <div className="bg-white mb-12 shadow-md text-center px-16 py-4 pb-8">
           
            <div className ="text-left">
                <p className ="mt-4">장르</p>
                <hr className="w-12"/>
                <div id="cataogry" className ="grid grid-cols-9 my-2 gap-1">
                    {genreCategory.map((item, index) => (<div key ={index} className ="flex gap-2">
                                                            <input type ="checkbox" onClick={(e: React.MouseEvent) => onClickGenreSelectBtn(item, e)}/>
                                                            <p className ="text-slate-300">{item}</p>
                                                        </div>))}
                </div>
                <p className ="mt-4">시점</p>
                <hr className="w-12 my-2 "/>
                <div id="view" className ="flex gap-10">
                    {person_view.map((item, index) =>(<div key ={index} className ="flex gap-2">
                                                            <input type ="checkbox" onClick={(e: React.MouseEvent) => onClickGenreSelectBtn(item, e)}/>
                                                            <p className ="text-slate-300">{item}</p>
                                                        </div>))}
                </div>
                <p className ="mt-4">분위기</p>
                <hr className="w-12 my-2 "/>
                <div id="mood" className ="flex gap-8">
                    {mood.map((item, index) => (<div key ={index} className ="flex gap-2">
                                                            <input type ="checkbox" onClick={(e: React.MouseEvent) => onClickGenreSelectBtn(item, e)}/>
                                                            <p className ="text-slate-300">{item}</p>
                                                        </div>))}
                </div>
            </div>
        </div>
    </div>
    );
}