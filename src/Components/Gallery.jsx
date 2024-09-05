const Gallery = () => {
    return (
        <div className="bg-[#131931]">
            <h2 className="text-left font-bold text-[32px] md:text-[3em] capitalize text-white leading-tight">
                <p className="text-center pt-10 text-transparent bg-clip-text text-white">
                    Our Gallery
                </p>
            </h2>
            <div className="px-6 md:w-10/12 mx-auto py-16 lg:pt-10 lg:pb-24 relative ">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-1 flex-col gap-2">
                        <div className="flex flex-1 flex-col">
                            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTJ8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNTAzOTYz&ixlib=rb-1.2.1&q=80&w=1080" />
                        </div>
                        <div className=" md:flex flex-1 flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                <img className="object-cover h-full" src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTN8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNTAzOTYz&ixlib=rb-1.2.1&q=80&w=1080" />
                            </div>
                            <div className=" md:flex flex-1 flex-col">
                                <img className="object-cover h-full" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTR8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNTAzOTYz&ixlib=rb-1.2.1&q=80&w=1080" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <div className=" md:flex flex-1 flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                <img className="object-cover h-full" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTV8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNTAzOTYz&ixlib=rb-1.2.1&q=80&w=1080" />
                            </div>
                            <div className=" md:flex flex-1 flex-col">

                                <img className="object-cover h-full" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTZ8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNTAzOTYz&ixlib=rb-1.2.1&q=80&w=1080" />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <img className="object-cover h-full" src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTd8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNTAzOTYz&ixlib=rb-1.2.1&q=80&w=1080" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;