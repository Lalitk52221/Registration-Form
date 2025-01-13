// import Typewriter from 'typewriter-effect/dist/core';
import { Typewriter } from "react-simple-typewriter";
import ImageSlider from "./UI/ImageSlider";

const Home = () => {
  return (
    <div className="container text-center w-full">
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <Typewriter
        words={[
          "Welcome to the Aakarshan! ", "Explore Aakarshan Website!", "Enroll Now!"]}
        loop={5} // Number of times to loop (use `0` for infinite loop)
        cursor
        cursorStyle="_"
        typeSpeed={70} // Typing speed
        deleteSpeed={50} // Deleting speed
        delaySpeed={1000} // Delay before starting the next word
      />
      </h1>
      {/* <h1 className="">Welcome to <span className="text-red-500"> Aakarshan</span> Center</h1> */}
      {/* <ImageSlider/>/ */}
    </div>
  )
}

export default Home