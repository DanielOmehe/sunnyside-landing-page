import { testimonials } from "../../data";
import Testimonial from "./testimonial";

const SunnysideTestimonials = () => (
    <>
        <section className="sunnyside-testimonials">
            <h2>Client Testimonials</h2>
            <div className="sunnyside-testimonials-container">
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial.name} data={testimonial} />)
                }
            </div>
        </section>
        <style jsx>{`
            .sunnyside-testimonials{
                width: 100%;
                height: fit-content; 
                padding: 5rem;
                text-align: center;
            }

            .sunnyside-testimonials h2{
                font-size: 2rem;
                font-family: var(--faunces);
                color: var(--dark-gray-blue);
            }

            .sunnyside-testimonials-container{
                width: 90%;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                grid-template-rows: 400px;
                margin: 5rem auto;
            }
        `}</style>
    </>
);

export default SunnysideTestimonials
