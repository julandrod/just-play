/**
 * 
 * @param {String} title title to use in the component 
 * @param {String} description description to use in the component  
 * @returns React component
 * 
 * @example
 * <Hero title="Hello World" description="This is a description"/> 
 */

const Hero = ({title, description}) => {
  return (
    <div className='bg-[#252322] w-full p-10'>
        <h1 className="m-8 text-4xl font-extrabold text-white ">{title}</h1>
        <p className="m-8 text-xl text-white leading-relaxed">{description}</p>
    </div>
  )
}

export default Hero