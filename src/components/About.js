import React from 'react'

export default function About(props) {
    //const [myStyle, setMyStyle] = useState({
      //  color : 'black',
       // backgroundColor : 'white',
       // border : '2px solid white'
    //})
       
    const myStyle = {
  color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
};

const buttonStyle = {
  color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
};
         
  return (
    <div className='container' style={myStyle}>
        <h2 className="my-3">About Us</h2>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                Analyze your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Analyze your text instantly with detailed statistics, including word count, character count, and estimated reading time.
            </div>
            </div>
        </div>
        <div className="accordion-item"style={myStyle} >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                Free to Use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               TextUtils is completely free and works directly in your browser without requiring any installation or sign-up.
            </div>
            </div>
        </div>
        <div className="accordion-item"style={myStyle} >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               This application works smoothly on all modern browsers such as Chrome, Firefox, Edge, and Safari, ensuring a consistent user experience across devices.
            </div>
            </div>
        </div>
</div>
      

    </div>
  )
}
