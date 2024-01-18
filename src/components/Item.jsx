import CircularProgress from "./CircularProgress";

export default function Item({list}){
    return (
        <div key={list.id} className="w-[180px] h-[340px] rounded-lg shadow-lg overflow-hidden">
              {/* 위: 그림 */}
              <div className="w-full h-[250px] bg-blue-500">
                <img 
                className="w-full h-full object-cover" 
                src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} 
                alt="movieList" />
              </div>
              {/* 아래: 내용 */}
              <div className="relative w-full h-[90px] pt-6 px-2">
                
                <h2 className="font-semibold">{list.original_title ? list.original_title : list.original_name}</h2>
                <p className="text-sm">{list.release_date ? list.release_date : list.first_air_date}</p>
                {/* 좋아요 평가 */}
                <div className="absolute -top-5 left-2">
                  <CircularProgress rate={Math.floor(list.vote_average*10)} />
                </div>
              </div>
            </div>
    )
}