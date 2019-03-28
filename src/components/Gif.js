import React from 'react';

function Gif(props) {
    const gifs = props.gifs;
    const allGifs = gifs.map((e, i) => {
        return <div className='col-sm-3 pic-box mb-3' key={i}>
        <img 
        src={e.images.fixed_height.url} 
        alt={e.url}
        id={e.id}
        onClick={props.check}
        className='w-100 click-img'
        />
        </div>
        
    })
    return (
        <div className='row'>
            {allGifs}
        </div>
    )
}

export default Gif;