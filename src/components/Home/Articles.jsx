import React from 'react';

const Articles = () => {
    return (
        <div className='flex flex-col justify-center items-center p-20'>
            <h1 className="text-4xl font-bold text-primary">Recent Articles
            </h1>
            <section class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div class="mb-10 overflow-hidden rounded-lg bg-white">
                                <img
                                    src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                                    alt="image"
                                    class="w-full"
                                />
                                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="text-primary hover:text-dark mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            Sustainable Fashion
                                        </a>
                                        <p className='text-xl font-normal text-primary'>Published On December, 2022</p>
                                    </h3>
                                    <p class="text-body-color mb-7 text-base leading-relaxed">
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when
                                        looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here',
                                        making it look like readable English. Many desktop
                                        publishing packages and web page editors now use
                                        Lorem Ipsum as their default model text, and a search
                                        for 'lorem ipsum' will uncover many web sites still in
                                        their infancy. Various versions have evolved over the
                                        years, sometimes by accident, sometimes on purpose
                                        (injected humour and the like).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div class="mb-10 overflow-hidden rounded-lg bg-white">
                                <img
                                    src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
                                    alt="image"
                                    class="w-full"
                                />
                                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            The ultimate UX and UI guide to card design
                                        </a>
                                    </h3>
                                    <p class="text-body-color mb-7 text-base leading-relaxed">
                                        Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                        Lorem consectetur adipiscing elit.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div class="mb-10 overflow-hidden rounded-lg bg-white">
                                <img
                                    src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                                    alt="image"
                                    class="w-full"
                                />
                                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            Creative Card Component designs graphic elements
                                        </a>
                                    </h3>
                                    <p class="text-body-color mb-7 text-base leading-relaxed">
                                        Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                        Lorem consectetur adipiscing elit.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Articles;