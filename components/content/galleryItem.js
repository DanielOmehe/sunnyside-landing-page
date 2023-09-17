const SunnysideGalleryItem = ({ url }) => (
	<>
		<div className="sunnyside-gallery-item"></div>
		<style jsx>{`
			.sunnyside-gallery-item {
				width: 100%;
				height: 500px;
				background: url(${url});
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			}
		`}</style>
	</>
);

export default SunnysideGalleryItem;