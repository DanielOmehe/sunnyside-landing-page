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
				grid-template-columns: repeat(4, 1fr);
			}

            @media only screen and (max-width: 400px){
                .sunnyside-gallery{
                    grid-template-columns: 1fr 1fr;
                    grid-template-row: 350px;
                }
            }
		`}</style>
	</>
);

export default Sunnysidegallery;
