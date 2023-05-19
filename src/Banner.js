import React,{useState, useEffect} from 'react'
import axios from './axios';
import requests from './API/request';
import './Banner.css'

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
           const request = await axios.get(requests.fetchTrending) 
           console.log(request.data.results[ Math.floor(Math.random() * request.data.results.length-1)]);
        //    console.log(Math.random() * request.data.results.length-1);
           setMovies
           (
           request.data.results[ Math.floor(Math.random() * request.data.results.length-2)]
           )

        //    setInterval(()=>{
        //     setMovies
        //     (
        //     request.data.results[ Math.floor(Math.random() * request.data.results.length-1)]
        //     )
        //  },3000)

           return request;
        }  
        fetchData();
    },[])

    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + "..." : str
    }

  return (
    <>
     <header className='Banner' 
     
     style={{
        backgroundSize: "100% 100%",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        margin: '0'
     }}>

        <div className='Banner_Contents'>
            <h1 className='Banner_Title'>
                {movies?.title || movies?.name || movies?.original_name}
            </h1>

            <div className='Banner_Buttons'>
                <button className='Banner_Button'>Play</button>
                <button className='Banner_Button'>My List</button>
            </div>
            <h1 className='Banner_Description'>{truncate(movies?.overview,150)}</h1>
        </div>
    
     </header>
    </>
  )
}   

export default Banner