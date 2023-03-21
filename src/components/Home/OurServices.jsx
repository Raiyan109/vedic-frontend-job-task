import React from 'react';

const OurServices = () => {
    return (
        <div className='bg-[#8abd8a]'>
            <div className=''>
                <h1 className="mb-5 pt-20 text-5xl text-[#063806] font-bold text-center">Vedic Energie</h1>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" class="object-cover object-center h-[450px] w-[650px]" src="https://dummyimage.com/460x500" />
                        </div>
                        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            <div class="flex flex-col mb-10 lg:items-start items-center before:content-['-']">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">

                                    &#10003;
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>


                                </div>
                            </div>
                            <div class="flex flex-col mb-10 lg:items-start items-center">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">

                                    &#10003;
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>


                                </div>
                            </div>
                            <div class="flex flex-col mb-10 lg:items-start items-center">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">

                                    &#10003;
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OurServices;