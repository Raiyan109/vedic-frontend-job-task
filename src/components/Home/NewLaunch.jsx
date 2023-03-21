import React from 'react';
import layerImg from '../../assets/blob-scene-haikei.svg'
const NewLaunch = () => {
    return (
        <div>
            <div className='w-full aspect-video bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${layerImg})` }}></div>
            <div className='relative lg:left-[800px] lg:bottom-[940px] sm:left-80 sm:bottom-[450px]'>
                <h1 className='mb-5 lg:text-5xl text-3xl text-[#063806] font-bold'>New Launch</h1>
            </div>
            <div className='relative sm:bottom-[500px] lg:bottom-[850px] p-20 lg:p-40'>
                <h1 className=' lg:text-4xl text-2xl text-[#063806] lg:font-bold font-normal'>Energy Calculator</h1>
                <div class="sm:w-2/3 sm:py-8  sm:mt-0 text-center sm:text-left">
                    <div className='max-w-[450px]'>
                        <p class="leading-relaxed lg:text-sm text-xs mb-4">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here', making it look like readable
                            English. Many desktop publishing packages and web page editors now use
                            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                            uncover many web sites still in their infancy. Various versions have evolved
                            over the years, sometimes by accident, sometimes on purpose</p>
                    </div>
                    <button className="btn btn-success text-white">Learn More</button>
                </div>

            </div>
        </div>
    );
};

export default NewLaunch;