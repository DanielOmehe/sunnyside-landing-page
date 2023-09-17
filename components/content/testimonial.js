import Image from "next/image";

const Testimonial = ({ data }) => (
	<>
		<div className="sunnyside-testimonial">
            <img src={data.url} alt="client image" />
            <p className="sunnyside-client-testiony">{data.text}</p>
            <h3 className="sunnyside-client-name">{data.name}</h3>
            <p className="sunnyside-client-post">{data.post}</p>
        </div>
		<style jsx>{`
            .sunnyside-testimonial{
                width: 100%;
                height: 100%;
                padding: 2rem 4rem;
            }

            .sunnyside-testimonial:nth-child(2){
                padding: 2rem 3rem;
            }

            .sunnyside-testimonial:nth-child(3){
                padding: 2rem 2.5rem;
            }

            .sunnyside-testimonial img{
                border-radius: 50%;
                margin-bottom: 1rem;
            }

            .sunnyside-testimonial p{
                font-size: var(--font-size);
                font-family: var(--barlow);
                margin-bottom: 2rem;
            }

            .sunnyside-testimonial h3{
                font-size: var(--font-size);
                font-family: var(--faunces);
                margin-bottom: 1rem;
            }
        `}</style>
	</>
);

export default Testimonial;
