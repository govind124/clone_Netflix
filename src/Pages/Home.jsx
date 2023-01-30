import React from 'react';
import Card from '../Component/Card'
import { movie_Data } from './Data'

// import Card from '../Component/Card'
export default function Cards ()  {
  return (
    <div className='container mt-5 cards_container'>

{
    movie_Data.map((val, i)=>{
      {/* if((val.name).includes("type movie name here")) */}
    return (
     
    (  <Card name={val.name} time={val.time} img={val.img} desc={val.description} profile={val.profile_img} key={i} />
      )
    )
      
    })
}
    
     {/* <Card name="RRR" time="2.5" img="https://pbs.twimg.com/profile_images/1513422368357912577/6FgmBymm_400x400.jpg"/>
     <Card name="Spider man no way home" time="2" img="https://www.spidermannowayhome.movie/assets/images/fullbanner.jpg"/>
     <Card name="Avenger: End Game" time="2" img="https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5157/875157-v"/>
     <Card name="Shamshera" time="2" img="https://m.media-amazon.com/images/M/MV5BZTA5MWRmMzEtODZlNy00YmEzLTk1YzktZGRlNTQyNGUyM2U0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_.jpg"/>
     <Card name="Thor love and thunder" time="2.1" img="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
     <Card name="Man vs Bee" time="1.5" img="https://m.media-amazon.com/images/M/MV5BMGExOWU4YmItMjkxOC00NjdjLTk2ZWEtZGViMGM1ZGFhZmQxXkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_.jpg"/>
     <Card name="Bharmastra" time="2" img="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Brahmastra_Teaser.jpeg/220px-Brahmastra_Teaser.jpeg"/> */}

     
    </div>
  )
}