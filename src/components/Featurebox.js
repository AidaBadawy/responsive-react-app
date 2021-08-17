
function Featurebox({image, title}) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={image}/>
            </div>
            <div className='s-b-text'>
                <h2>{title}</h2>
                <p>Non minim consequat id labore commodo pariatur anim mollit.</p>

            </div>
            
        </div>
    )
}

export default Featurebox
