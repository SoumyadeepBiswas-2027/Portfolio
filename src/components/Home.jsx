// import TextTypeStyle from "../BitsStore/TextTypeStyle"

// const Home = () => {
//   return (
//     <div className=" gap-4 items-center  flex-1 pt-32 text-white text-left">
//       <h1 className="text-4xl font-Italic"><TextTypeStyle/></h1>
//     </div>
//   )
// }

// export default Home

import TextTypeStyle from "../BitsStore/TextTypeStyle"

const Home = () => {
  return (
    <div className="flex flex-col flex-1 pt-45 px-16 md:px-24 lg:px-12 text-white text-left">
      
      <p className="text-3xl text-gray-400 tracking-widest uppercase mb-4">
        Hi, I'm Soumyadeep Biswas
      </p>

      <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
        <TextTypeStyle />
      </h1>

      <p className="text-gray-400 text-lg max-w-xl mt-2">
        Transforming ideas into seamless, interactive web experiences.
      </p>

    </div>
  )
}

export default Home