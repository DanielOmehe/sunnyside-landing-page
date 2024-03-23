import Hamburger from "../../public/images/icon-hamburger.svg";
import Image from "next/image";

const SunnysideNavbar = ({ menuToggle }) => (
	<>
		<nav className="sunnyside-navbar">
			<h1 className="sunnyside">sunnyside</h1>
			<ul className="sunnyside-nav-items">
				<li className="sunnyside-nav-item">
					<a href="#">About</a>
				</li>
				<li className="sunnyside-nav-item">
					<a href="#">Services</a>
				</li>
				<li className="sunnyside-nav-item">
					<a href="#">Projects</a>
				</li>
				<button className="sunnyside-contact">Contact</button>
			</ul>
			<button className="hamburger-menu" onClick={menuToggle}>
				<Image src={Hamburger} alt="Hamburger menu" />
			</button>
		</nav>
		<style jsx>{`
			.sunnyside-navbar {
				width: 100%;
				padding: 1.5rem 4rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.sunnyside {
				font-family: var(--barlow);
				font-weight: var(--faunces-weight-bold);
				color: var(--white);
				font-size: 2rem;
				letter-spacing: 0.1rem;
			}

			.sunnyside-nav-items {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 2.5rem;
			}

			.sunnyside-nav-item {
				list-style: none;
			}

			.sunnyside-nav-item a {
				font-family: var(--barlow);
				font-size: var(--font-size);
				color: var(--white);
				text-decoration: none;
				font-weight: var(--barlow);
			}

			.sunnyside-contact {
				padding: 0.8rem 1.6rem;
				background: var(--white);
				border-radius: 50px;
				border: none;
				outline: none;
				cursor: pointer;
				font-size: var(--font-size);
				font-weight: var(--barlow-weight);
				text-transform: uppercase;
				font-family: var(--faunces);
			}

			.hamburger-menu {
				display: none;
			}

			@media only screen and (max-width: 400px) {
				.sunnyside-navbar {
					padding: 1rem;
					width: 100%;
				}

				.hamburger-menu {
					display: block;
                    background: none;
					width: 50px;
					height: 50px;
                    border: none;
                    outline: none;
                    cursor: pointer;
				}

				.sunnyside-nav-items {
					display: none;
				}

				.sunnyside-contact {
					display: none;
				}
			}
		`}</style>
	</>
);

export default SunnysideNavbar;
