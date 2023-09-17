import { icons } from '../../data';

const SunnysideFooter = () => (
	<>
		<footer className="sunnyside-footer">
            <h2>sunnyside</h2>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Sevices</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div>
            {
                icons.map((icon, indx) => <img key={indx.toString()} src={icon} alt='footer-icon'/> )
            }
            </div>
            <p>Challenge by: <a href="https://www.frontendmentor.io/home">Frontend mentors</a></p>
            <p>Coded by: <a href='https://github.com/DanielOmehe'>Daniel Omehe</a></p>
        </footer>
		<style jsx>{`
			.sunnyside-footer {
                width: 100%;
                height: auto;
                background: var(--cyan);
                text-align: center;
                padding: 5rem 0 1rem 0;
			}

            .sunnyside-footer h2{
                color: var(--dark-cyan);
                font-size: 2rem;
                font-family: var(--barlow);
                margin-bottom: 4rem;
            }

            .sunnyside-footer ul{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4rem;
                margin-bottom: 5rem;
            }

            .sunnyside-footer ul li{
                list-style: none;
            }

            .sunnyside-footer ul li a{
                text-decoration: none;
                color: var(--dark-cyan);
                font-size: var(--font-size);
                font-family: var(--barlow);
            }

            .sunnyside-footer div{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-bottom: 5rem;
            }

            .sunnyside-footer p{
                color: var(--white);
                font-size: var(--font-size);
                font-family: var(--barlow);
                margin-bottom: 1rem;
            }

            .sunnyside-footer p a{
                text-decoration: none;
                color: var(--dark-cyan);
                font-size: var(--font-size);
                font-family: var(--faunces);
            }
		`}</style>
	</>
);

export default SunnysideFooter;
