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
            height: 600px;
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
            font-size: var(--font-size);
            cursor: pointer;
        }

        .sunnyside-content-grid:nth-child(1) button::after{
            content: '';
            position: absolute;
            width: 150px;
            height: 10px;
            background: var(--yellow-light);
            border-radius: 50px;
            top: 62%;
            left: 0%;
            z-index: 0;
        }

        .sunnyside-content-grid:nth-child(4) button::after{
            content: '';
            position: absolute;
            width: 150px;
            height: 10px;
            background: var(--soft-red-light);
            border-radius: 50px;
            top: 62%;
            left: 0%;
            z-index: 0;
        }

        .sunnyside-content-grid:nth-child(1) button:hover::after{
            background: var(--yellow);
        }
        .sunnyside-content-grid:nth-child(4) button:hover::after{
            background: var(--soft-red);
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
            text-align: center;
            margin: 13rem 0 0 5rem;
        }

        .sunnyside-content-grid:nth-child(5) p{
            font-family: var(--barlow);
            color: var(--dark-cyan);
            text-align: center;
            margin: 3rem 0 0 2rem;
        }

        .sunnyside-content-grid:nth-child(6) h2{
            font-family: var(--faunces);
            font-weight: var(--faunces-weight-bold);
            color: var(--dark-cyan);
            text-align: center;
            margin: 13rem 0 0 5rem;
        }

        .sunnyside-content-grid:nth-child(6) p{
            font-family: var(--barlow);
            color: var(--dark-cyan);
            text-align: center;
            margin: 3rem 2rem 0;
        }

        @media only screen and (max-width: 400px){
            .sunnyside-content-grid{
                width: 100%;
                height: 350px;
                padding: 0;
                text-align: center;
                background-position: center;
                background-size: cover;
                padding: 1.5rem 2rem;
            }

            .sunnyside-content-grid p{
                padding: 0;
            }

            .sunnyside-content-grid:nth-child(2){
                grid-row: 1 / 2;
            }

            .sunnyside-content-grid:nth-child(5), .sunnyside-content-grid:nth-child(6){
                height: 100%;
                background-position: center;
                background-size: cover;
                grid-row: span 2;
                text-align: center;
            }

            .sunnyside-content-grid:nth-child(5) h2, .sunnyside-content-grid:nth-child(6) h2{
                padding: 0;
                margin: 24rem 0 0 0;
            }

            .sunnyside-content-grid:nth-child(5) p, .sunnyside-content-grid:nth-child(6) p{
                padding: 0;
                margin: 2rem 0 0 0;
            }

            .sunnyside-content-grid h2{
                padding: 0;
            }
        }
      `}</style>
    </>
)

export default SunnysideContentGrid