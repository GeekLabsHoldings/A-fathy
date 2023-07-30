import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} /> 
            </div>
            <p>{description}</p>
            {/* <div class="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div> */}
        </div>
    );
};

export default TestiMonialsDetails;