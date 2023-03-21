import React from 'react';
import img from '../../assets/pexels-pixabay-159397.jpg'

const OurServices = () => {
    return (
        <div className='bg-[#b6e7b6]'>
            <div className=''>
                <h1 className="mb-5 pt-20 text-5xl text-[#063806] font-bold text-center flex flex-col w-full ">Our Services</h1>

                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Green solutions can help you in cost-cutting of energy by reducing energy consumption, generating clean energy, taking advantage of
                    government incentives, and improving building design. By adopting green solutions, individuals and businesses can save money on energy
                    bills and promote a more sustainable future for al</p>

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" class="object-cover object-center h-[450px] w-[650px]" src={img} />
                        </div>
                        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            <div class="flex items-center border-t border-green-600 p-2 gap-4">
                                <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5">
                                    &#10003;
                                </div>
                                <div class="flex justify-center items-center">
                                    <h2 class="text-green-900 text-lg title-font font-medium mb-3">Energy Calculation</h2>
                                </div>
                            </div>
                            <div class="flex items-center border-t border-green-600 p-2 gap-4">
                                <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5">
                                    &#10003;
                                </div>
                                <div class="flex justify-center items-center">
                                    <h2 class="text-green-900 text-lg title-font font-medium mb-3">Energy Saving</h2>
                                </div>
                            </div>
                            <div class="flex items-center border-t border-green-600 p-2 gap-4">
                                <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5">
                                    &#10003;
                                </div>
                                <div class="flex justify-center items-center">
                                    <h2 class="text-green-900 text-lg title-font font-medium mb-3">Energy Demand Management</h2>
                                </div>
                            </div>
                            <div class="flex items-center border-t border-green-600 p-2 gap-4">
                                <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5">
                                    &#10003;
                                </div>
                                <div class="flex justify-center items-center">
                                    <h2 class="text-green-900 text-lg title-font font-medium mb-3">Reduce bills and save money</h2>
                                </div>
                            </div>
                            <div class="flex items-center border-t border-green-600 p-2 gap-4">
                                <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5">
                                    &#10003;
                                </div>
                                <div class="flex justify-center items-center">
                                    <h2 class="text-green-900 text-lg title-font font-medium mb-3">Energy Supply Solution</h2>
                                </div>
                            </div>
                            <div class="flex items-center border-t border-green-600 p-2 gap-4">
                                <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-500 mb-5">
                                    &#10003;
                                </div>
                                <div class="flex justify-center items-center">
                                    <h2 class="text-green-900 text-lg title-font font-medium mb-3">Renewable Energy Solutions</h2>
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