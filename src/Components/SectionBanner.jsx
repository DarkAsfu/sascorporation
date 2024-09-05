const SectionBanner = ({ banner, title }) => {
    console.log(banner, title);
    return (
        <>
            <section
                className="overflow-hidden bg-cover bg-top bg-no-repeat"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: 'center', // Center the background image
                    backgroundSize: 'cover',      // Ensure the image covers the entire section
                }}
            >
                <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{title}</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionBanner;
