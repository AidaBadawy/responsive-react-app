
function About({ image, title, button}) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={image} alt=''/>
            </div>
            <div className='about-text'>
                <h2>{title}</h2>
                <p>Esse anim ea amet aute velit ad dolor cupidatat commodo consequat
                    sit ea mollit ullamco. Et sit reprehenderit commodo ipsum eu exercitation
                    adipisicing voluptate. Cupidatat cupidatat eu consectetur culpa et est
                    laboris exercitation exercitation cillum. Duis laboris consequat eu cillum
                    reprehenderit amet.</p>
                    <button>{button}</button>

            </div>
            
        </div>
    )
}

export default About
