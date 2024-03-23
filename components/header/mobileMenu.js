const MobileMenu = ({ show }) => {
	return (
		<>
			<div className="mobile-menu">
				<ul className="mobile-menu-items">
					<li className="mobile-menu-item">
						<a href="#">About</a>
					</li>
					<li className="mobile-menu-item">
						<a href="#">Services</a>
					</li>
					<li className="mobile-menu-item">
						<a href="#">Projects</a>
					</li>
				</ul>
				<button className="mobile-contact">contact</button>
			</div>
			<style jsx>{`

            .mobile-menu{
                display: none;
            }
				@media only screen and (max-width: 400px) {
					.mobile-menu {
						width: 90%;
						height: fit-content;
						display: ${show ? "block" : "none"};
						position: absolute;
						top: 20%;
						left: 1rem;
						background: #fff;
						text-align: center;
						padding: 3.5rem;
					}

					.mobile-menu::before {
						content: "";
						width: 40px;
						height: 40px;
						background: #fff;
						position: absolute;
						top: -1.8rem;
						right: 0.05rem;
						clip-path: polygon(0% 100%, 0% 0%, 100% 0%);
						transform: rotate(180deg);
					}

					.mobile-menu-items {
						display: flex;
						flex-direction: column;
						gap: 2rem;
					}

					.mobile-menu-item {
						list-style: none;
					}

					.mobile-menu-item a {
						text-decoration: none;
						color: #000;
						font-family: var(--barlow);
						font-weight: 500;
					}

					.mobile-contact {
						padding: 0.9rem 2rem;
						border-radius: 1.5rem;
						margin-top: 2rem;
						border: none;
						outline: none;
						font-weight: 600;
						text-transform: uppercase;
						letter-spacing: 0.1rem;
						font-family: var(--barlow);
						background: #faff12;
					}
				}
			`}</style>
		</>
	);
};

export default MobileMenu;
