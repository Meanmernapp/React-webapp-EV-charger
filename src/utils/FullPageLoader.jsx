import React from 'react'

const FullPageLoader = () => {
    const loadericon = 'https://i.gifer.com/ZKZg.gif'
    return (
        <div className='loader_container' id='overlay'>
           
              <div className='loader_div'>
                <img src={loadericon} alt="" width="80px" height="80px" />
              </div>
           

        </div>
    )
}

export default FullPageLoader