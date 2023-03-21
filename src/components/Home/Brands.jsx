import React from 'react';
import img from '../../assets/recycle-5047886_640.png'
const Brands = () => {
    return (
        <div>
            {/* <!-- ====== Brands Section Start --> */}
            <section class="bg-green-100 py-20 lg:py-[120px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="flex flex-wrap items-center justify-center">
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={img} width="130" height="130" alt="" />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={img} width="130" height="130" alt="" />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={img} width="130" height="130" alt="" />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img src={img} width="130" height="130" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Brands Section End --> */}

        </div>
    );
};

export default Brands;