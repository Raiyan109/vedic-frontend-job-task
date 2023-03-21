import React from 'react';

const Schedule = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-green-800 p-20'>
                <h1 className="text-4xl font-bold text-white">SEE WHAT WE CAN DO FOR YOU
                </h1>
                <h1 className="text-3xl text-white uppercase py-5">Schedule Your <span className='text-secondary'>First Meeting</span>
                </h1>

                <p className="py-6 text-white lg:w-2/3 mx-auto leading-relaxed text-sm font-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <button className='btn btn-secondary text-primary font-normal'>SCHEDULE NOW</button>
            </div>
        </div>
    );
};

export default Schedule;