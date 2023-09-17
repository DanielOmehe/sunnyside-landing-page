import { images } from "../../data";
import SunnysideGalleryItem from './galleryItem';

const Sunnysidegallery = () => (
	<>
		<section className="sunnyside-gallery">
			{images.map((image) => (
				<SunnysideGalleryItem url={image} />
			))}
		</section>
		<style jsx>{`
			.sunnyside-gallery {
                width: 100%;
                height: 500px;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
			}
		`}</style>
	</>
);

export default Sunnysidegallery;
