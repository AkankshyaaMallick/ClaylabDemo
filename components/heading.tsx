type HeadingProps = {
    text: string;
};

const Heading = ({ text }: HeadingProps) => {
    
    return (
        // <h2 className="text-2xl sm:text-3xl md:text-4xl font-kindsans underline underline-offset-4 mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold underline underline-offset-4 mb-4">

            {text}
        </h2>
    );
};

export default Heading;
