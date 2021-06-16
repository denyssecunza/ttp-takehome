import React, {useState, useEffect} from "react";
import PinCard from './PinCard';
function Pins(){
  
  const [images, setImages] = useState(null);
  const [pages, setPages] = useState(0);
  const [scrolling,setScrolling] = useState(0);
  
  function loadImages(){
    //fetch the data from the .json file
    fetch('data.json',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => res.json()).then((info) => {
      setImages([...info,...info,...info]);
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=> {
    loadImages();
  },[scrolling])

  const imagesPerPage=5;
  const pagesVisited = pages * imagesPerPage;

  function loadMore(){
    setScrolling(0);
    let num = pages;
    if(pages === 6){
      setPages(0);
    }
    setPages(num+1)
    loadImages()
  }

  window.onscroll = function debounce(){ 
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      loadMore();
    }
  }

  return(
    <>
    <div className="card-columns" style={{padding:"80px"}}>
      {images && images.slice(0,pagesVisited+imagesPerPage).map((info,i) => ( 
        <PinCard source={info.images['136x136'].url} alter={info.visual_description} title = {info.title} description={info.description} repin={info.repin_count} link={info.link}></PinCard>
      ))}
      {images && images.slice(0,pagesVisited+imagesPerPage).map((info,i) => (
        <PinCard source={info.images['236x'].url} alter={info.visual_description} title = {info.title} description={info.description} repin={info.repin_count} link={info.link}></PinCard>
      ))}
      {images && images.slice(0,pagesVisited+imagesPerPage).map((info,i) => (
        <PinCard source={info.images['474x'].url} alter={info.visual_description} title = {info.title} description={info.description} repin={info.repin_count} link={info.link}></PinCard>
      ))}
      {images && images.slice(0,pagesVisited+imagesPerPage).map((info,i) => (
        <PinCard source={info.images['736x'].url} alter={info.visual_description} title = {info.title} description={info.description} repin={info.repin_count} link={info.link}></PinCard>
      ))}
    </div>
    </>
  )
}

export default Pins;