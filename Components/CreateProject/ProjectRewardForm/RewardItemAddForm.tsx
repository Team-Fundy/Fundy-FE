export default function RewardItemAddForm() {

  const typeSelections = ['옵션없음','선택(직관)','직접(주관)']
  const selected = true
  return (
    <div className ="w-[22.5rem] h-[40rem] rounded-md border-[0.15rem] border-gray-300 bg-white text-gray-400 flex flex-col justify-between">
      <div className="w-[19.5rem] mx-auto">
        <h3 className ="text-gray-500 mt-8">아이템 이름</h3>
        <input
          className ="border-2 border-slate-100 rounded-md my-2 h-14 w-full"
          placeholder ="  ex) 크레딧 추가"/>
        <h4 className ="mt-8 mb-2">옵션 조건</h4>
        <div className ="flex gap-4 justify-center">
          <button 
            className ={`w-24 text-[0.95rem] py-2 border-[0.12rem] rounded-md ${selected ? 'border-purple-700 text-gray-500' : 'border-gray-300'}`}>
            옵션 없음
          </button>
          <button 
            className ={`w-24 text-[0.95rem] py-2 border-[0.12rem] rounded-md ${selected ? 'border-purple-700 text-gray-500' : 'border-gray-300'}`}>
            선택(객관)
          </button>
          <button 
            className ={`w-24 text-[0.95rem] py-2 border-[0.12rem] rounded-md ${selected ? 'border-purple-700 text-gray-500' : 'border-gray-300'}`}>
            직접(주관)
          </button>
        </div>
      </div>
      <button className="mx-auto my-6 w-[19.5rem] bg-gray-200 h-12">추가하기</button>
    </div>
  )
}