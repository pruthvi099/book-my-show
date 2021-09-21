import React,{useContext} from 'react'
//Context
import { MovieContext } from '../../context/movie.context'

const MovieInfo=()=> {
    const {movie}=useContext(MovieContext);

    const genres=movie.genres?.map(({name})=>name).join(",")
    //Optional chaining
    return (
        <>
          <div className="flex flex-col gap-3 lg:gap-8">
             <div className="flex item-center gap-3  md:px-4">
                 <div className="w-48 h-8">
                     <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" 
                     alt="Premier"
                     className="w-full h-full" />
                 </div>
                 <span className="bg-bms-700 p-2 text-xs text-white rounded-md">Streaming Now</span>
             </div> 
             <h1 className="text-white lg:text-5xl font-bold hidden lg:block">{movie.original_title}</h1>
            <div className="flex flex-col-reverse lg:gap-5 lg:flex-col gap-3 ">
            <div className="text-white font-light flex flex-col gap-2  md:px-4">
                 <h4>4K &bull; {movie.original_language} </h4>
                 <h4>{(movie.runtime/60).toFixed(2)}h &bull; {genres} &bull; 13+ </h4>
             </div>
             <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                 <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                     Rent ₹149
                 </button>
                 <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                     Buy ₹649
                 </button>
             </div>
            </div>
          </div>  
        </>
    )
}

export default MovieInfo
