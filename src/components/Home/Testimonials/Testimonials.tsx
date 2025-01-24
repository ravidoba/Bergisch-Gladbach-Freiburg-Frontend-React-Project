import React from 'react';
import './Testimonials.css';  // Import CSS for styling

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Buzz Usborne',
      title: 'Principal Designer, Buildkite',
      quote:
        'Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.',
    },
    {
      name: 'Gabriel Valdivia',
      title: 'Principal Product Designer, Patreon',
      quote:
        'Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what’s transpiring across various teams—impeccably aligning with our pre-existing procedures.',
    },
  ];

  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>{testimonial.quote}</p>
          <p>
            <strong>{testimonial.name}</strong>
            <br />
            {testimonial.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
