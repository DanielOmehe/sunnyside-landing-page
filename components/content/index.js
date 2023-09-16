import React from 'react';
import SunnysideContentGrid from './contentgrid';

const SunnysideContent =()=>(
    <>
     <main className='sunnyside-content'>
        <section className='sunnyside-content-grid-container'>
        <SunnysideContentGrid title={'Transform your brand'} subtitle={'We are a full service agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'} learn={'Learn more'} />
        <SunnysideContentGrid background={'images/desktop/image-transform.jpg'} />
        <SunnysideContentGrid background={'images/desktop/image-stand-out.jpg'} />
        <SunnysideContentGrid title={'Stand out to the right aundience'} subtitle={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we\'ll build and extend your brand in the digital places.'} learn={'Learn more'} />
        <SunnysideContentGrid title={'Graphic Design'} subtitle={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients\' attention.'} background={'images/desktop/image-graphic-design.jpg'} />
        <SunnysideContentGrid title={'Photography'} subtitle={'Increase your credibility by getting the most stunnig, high-quality photos that improve your business image.'} background={'images/desktop/image-photography.jpg'} />
        </section>
     </main>
     <style jsx>{`
        .sunnyside-content{
            width: 100%;
            height: fit-content;
        }

        .sunnyside-content-grid-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, 600px);
        }
     `}</style>
    </>
  )

export default SunnysideContent;
