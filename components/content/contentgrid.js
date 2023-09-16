const SunnysideContentGrid =({title, subtitle, background})=>(
    <>
      <section className='sunnyside-content-grid'>
        <h2>{title || ""}</h2>
        <p>{subtitle || ""}</p>
        <button>Learn more</button>
        <div className="after"></div>
      </section>
      <style jsx>{`
        .sunnyside-content-grid{
            width: 100%;
            height: 100%;
            background: url(${background});
            bacground-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            padding: 10rem;
            position: relative;
            z-index: 1;
        }

        .sunnyside-content-grid h2{
            font-family: var(--faunces);
            font-weight: var(--faunces-weight-bold);
            color: #000;
            font-size: 2.3rem;
            margin-bottom: 1.7rem;
            padding-right: 4rem;
        }

        .sunnyside-content-grid p{
            font-family: var(--barlow);
            color: #000;
            font-size: var(--font-size);
            margin-bottom: 1.7rem;
            padding-right: 2rem;
        }

        .sunnyside-content-grid button{
            text-transform: uppercase;
            font-family: var(--faunces);
            background: none;
            padding: .5rem;
            border: none;
            outline: none;
            font-weight: var(--faunces-weight);
            position: relative;
            z-index: 1;
        }

        .sunnyside-content-grid:nth-child(1) .after{
            content: '';
            position: absolute;
            width: 100px;
            height: 10px;
            background: var(--yellow);
            border-radius: 50px;
            top: 65%;
            left: 21%;
            z-index: 0;
        }

        .sunnyside-content-grid:nth-child(4) .after{
            content: '';
            position: absolute;
            width: 100px;
            height: 10px;
            background: var(--yellow);
            border-radius: 50px;
            top: 65%;
            left: 21%;
            z-index: 0;
        }

        .sunnyside-content-grid:nth-child(2) button{
            display: none;
        }

        .sunnyside-content-grid:nth-child(3) button{
            display: none;
        }

        .sunnyside-content-grid:nth-child(5){
            background-position: 10% 20%;
        }

        .sunnyside-content-grid:nth-child(6){
            background-position: 10% 20%;
        }

        .sunnyside-content-grid:nth-child(5) button{
            display: none
        }

        .sunnyside-content-grid:nth-child(6) button{
            display: none
        }

        .sunnyside-content-grid:nth-child(5) h2{
            font-family: var(--faunces);
            font-weight: var(--faunces-weight-bold);
            color: var(--dark-cyan);
        }

        .sunnyside-content-grid:nth-child(6) h2{
            font-family: var(--faunces);
            font-weight: var(--faunces-weight-bold);
            color: var(--dark-cyan);
        }

      `}</style>
    </>
)

export default SunnysideContentGrid