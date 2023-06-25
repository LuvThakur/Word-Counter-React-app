import React, { useState } from 'react'

export default function About_us() {

    const [darkstyle, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const Light = () => {
        setStyle(
            {
                color: "black",
                backgroundColor: "white",
                transition: " 1s"
            }
        );
    }

    const Dark = () => {
        setStyle(
            {
                color: "white",
                backgroundColor: "black",
                transition: "1s"
            }
        )
    }



    return (

        <div className='container my-5' style={darkstyle}>

            <h2> About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={darkstyle}>
                    <h2 className="accordion-header">
                        <button style={darkstyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         About Us
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Word-Counter App .</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkstyle}>
                    <h2 className="accordion-header">
                        <button style={darkstyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={darkstyle} className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkstyle}>
                    <h2 className="accordion-header">
                        <button style={darkstyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-4' style={darkstyle}>
                <button className='btn btn-danger' type='submit' onClick={Dark} > Dark-Mode</button>
                <button className='btn btn-success' type='submit' onClick={Light} style={{ margin: '10px 50px' }}>Light-Mode</button>
            </div>

        </div >


    )
}
