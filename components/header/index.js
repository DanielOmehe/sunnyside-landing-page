import SunnysideNavbar from "./nav";

const SunnySideHeader =()=>(
    <>
        <header className="sunnyside-header">
            <SunnysideNavbar />
            <h1 className="sunnyside-heading">we are creatives</h1>
            <img src="images/icon-arrow-down.svg" alt="arrow-down" />
        </header>
        <style jsx>{`
            .sunnyside-header{
                width: 100%;
                height: 100vh;
                background: url('images/desktop/image-header.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 10% 100%;
                position: relative;
            }

            .sunnyside-heading{
                position: absolute;
                top: 18%;
                left: 30%;
                transform: translate(-10%, -10%);
                font-size: 4rem;
                text-transform: uppercase;
                color: var(--white);
                font-family: var(--faunces);
                letter-spacing: 1rem;
            }

            .sunnyside-header img{
                height: 8rem;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-40%, -30%);
            }
        `}</style>
    </>
);

export default SunnySideHeader