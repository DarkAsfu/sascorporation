import { Button, Input, Textarea } from "@nextui-org/react";
const ContactForm = () => {
    return (
        <div>
            <div className="md:w-6/12 px-10 mx-2 md:mx-auto py-10 md:py-24 border md:my-20 rounded-md my-4">
                <h3 className="font-bold mb-6 text-[24px] text-[#37c636]">Contact with us</h3>
                <form>
                    <div className="md:flex gap-4">
                        {/* Left Column */}
                        <div className="flex-1 flex flex-col gap-4">
                            <Input className="mb-4" type="text" label="Name" />
                            <Input className="mb-4" type="email" label="Email" />
                            <Input className="mb-4" type="text" label="Subject" />
                        </div>
                        {/* Right Column */}
                        <div className="flex-1 flex flex-col h-full">
                            <Textarea
                                label="Message"
                                placeholder="Enter your message"
                                className="flex-1"
                            />
                            <Button className="mt-20 py-6 bg-[#37c636] text-white">
                                Button
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;