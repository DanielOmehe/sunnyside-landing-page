import React from 'react'

const SunnysideContent =()=>(
    <>
     <main className='sunnyside-content'></main>
     <style jsx>{`
        .sunnyside-content{
            width: 100%;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, 1fr);
        }
     `}</style>
    </>
  )

export default SunnysideContent;
