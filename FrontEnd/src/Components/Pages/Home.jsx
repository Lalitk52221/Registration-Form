import { Typewriter } from "react-simple-typewriter";
import ImageSlider from "../UI/ImageSlider";
import { Link } from "react-router";
import { images } from "../Data";
import Counter from "../UI/Counter";
import { useSelector } from "react-redux";

const Home = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div className="relative container text-center w-full pt-20 mt-3">
      <h1 className="  text-center text-xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 mt-4 ">
        <Typewriter 
          words={[
            `Welcome ${isAuthenticated ? user.name : "to Aakarshan"}! `,
            "Explore Aakarshan Website!",
            "Enroll Now!",
            `Welcome ${isAuthenticated ? user.name : "to Aakarshan"}! `,
          ]}
          loop={5} // Number of times to loop (use `0` for infinite loop)
          cursor
          cursorStyle="_"
          typeSpeed={70} // Typing speed
          deleteSpeed={50} // Deleting speed
          delaySpeed={1000} // Delay before starting the next word
        />

        <Link to={"/registration-form"}>
          <button className="absolute right-6 lg:right-14 top-2 lg:top-10 bg-red-500 text-white text-xs lg:text-lg p-2 ">
            Join Now
          </button>
        </Link>
      </h1>

      <ImageSlider images={images} />

      <Counter end={100} duration={2000} />
    </div>
  );
};

export default Home;
