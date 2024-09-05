const AboutUs = () => {
    return (
        <section>
            <div className="mx-auto md:w-10/12 py-16 sm:py-24 px-6 md:px-0">
                <div className="max-w-3xl">
                    <h2 className="text-left font-bold text-[32px] md:text-[3em] capitalize text-white leading-tight">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#05b804] to-[#198fd9]">
                            About Us
                        </p>
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt=""
                            src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                            className="absolute inset-0 h-full w-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                            SAS Corporation is a multifaceted company that specializes in a wide range of business sectors. With a diverse portfolio of services, SAS Corporation is committed to meeting the needs of their customers in a variety of industries. Their areas of expertise include feed ingredient supply,  ICT, agriculture (including fisheries, poultry, and animal fattening), macrofinancing, garments and many more. 
                            </p>

                            <p>
                            SAS Corporation takes pride in providing high-quality products and services that are tailored to meet the unique needs of each of their clients. With a strong focus on innovation and customer satisfaction, SAS Corporation is dedicated to delivering exceptional results and building long-lasting partnerships with their clients.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;