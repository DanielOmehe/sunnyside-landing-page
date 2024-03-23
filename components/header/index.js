import SunnysideNavbar from "./nav";
import MobileMenu from "./mobileMenu";
import { useState } from "react";

const SunnySideHeader = () => {
	const [show, setShow] = useState(false);

	const toggleMenu = () => setShow((show) => !show);
	return (
		<>
			<header className="sunnyside-header">
				<SunnysideNavbar menuToggle={toggleMenu} />
				<h1 className="sunnyside-heading">we are creatives</h1>
				<img src="images/icon-arrow-down.svg" alt="arrow-down" />
				<MobileMenu show={show} />
			</header>
			<style jsx>{`
				.sunnyside-header {
					width: 100%;
					height: 100vh;
					background: url("images/desktop/image-header.jpg");
					background-repeat: no-repeat;
					background-size: cover;
					background-position: 10% 100%;
					position: relative;
				}

				.sunnyside-heading {
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

				.sunnyside-header img {
					height: 8rem;
					position: absolute;
					top: 40%;
					left: 50%;
					transform: translate(-40%, -30%);
				}

				@media only screen and (max-width: 400px) {
					.sunnyside-header {
						width: 100%;
						height: 66vh;
						background: url("images/mobile/image-header.jpg");
						background-size: contain;
						background-position: center;
						background-repeat: no-repeat;
					}

					.sunnyside-heading {
						font-size: 2rem;
						text-align: center;
						padding: 0;
						left: 3.5rem;
						top: 11rem;
					}

					.sunnyside-header img {
						top: 60%;
					}
				}
			`}</style>
		</>
	);
};

export default SunnySideHeader;
