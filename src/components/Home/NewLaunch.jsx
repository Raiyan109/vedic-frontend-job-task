import React from 'react';
import layerImg from '../../assets/blob-scene-haikei.svg'
import img from '../../assets/pexels-pixabay-159397.jpg'
const NewLaunch = () => {
    return (
        <div>
            <div className='w-full aspect-video bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${layerImg})` }}></div>
            <div className='relative lg:left-[800px] lg:bottom-[940px] sm:left-80 sm:bottom-[450px]'>
                <h1 className='mb-5 lg:text-5xl text-3xl text-[#063806] font-bold'>New Launch</h1>
            </div>
            <div className="hero min-h-screen relative sm:bottom-[500px] lg:bottom-[1150px] p-20 lg:p-40">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-[#063806]">Energy Calculator
                        </h1>
                        <p className="py-6 text-[#063806]">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here', making it look like readable
                            English. Many desktop publishing packages and web page editors now use
                            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                            uncover many web sites still in their infancy. Various versions have evolved
                            over the years, sometimes by accident, sometimes on purpose injected</p>
                        <button className="btn btn-primary text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewLaunch;