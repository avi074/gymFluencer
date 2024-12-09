import features from "../data/features"

function Home() {
  return (
    <>
      <div
        id='home'
        className='hero-section relative flex flex-col justify-center items-center text-blue-50 fadeInUp'>
        <h1 className='text-4xl font-bold py-2 px-6 backdrop-blur-sm drop-shadow-[0_0_1px_black]'>
          Track Your Fitness Journey
        </h1>
        <p className='text-xl text-center max-w-lg p-2 backdrop-blur-sm drop-shadow-[0_0_.5px_black]'>
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with our user-friendly interface.
        </p>
      </div>

      <div id='features' className='features-section py-16 bg-gray-100'>
        <div className='container mx-auto flex flex-col items-center text-center space-y-6'>
          <div className='features-heading'>
            <h2 className='text-3xl text-blue-500 font-semibold transition-transform duration-300 transform hover:scale-110'>
              Discover Our App&apos;s Key Features
            </h2>
          </div>
          <div className='features-description '>
            <p className='text-xl text-balance text-gray-700 font-semibold transition-transform duration-300 transform hover:scale-110'>
              GymFluencer is your ultimate fitness companion, designed to help
              you track your workouts with ease. Our application allows you to
              log exercises, count reps, and calculate calories burned, all
              through a user-friendly interface. Whether you are a beginner or a
              seasoned athlete, our app will keep you motivated and on track.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto mt-20'>
          {features.map((feature, idx) => (
            <div
              key={`feature-${idx}-${feature.title}`}
              className='flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-110'>
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className='w-3/4 object-contain rounded-lg mb-4'
              />
              <h3 className='text-2xl font-semibold transition-transform duration-300 transform hover:scale-110'>
                {feature.title}
              </h3>
              <p className='text-gray-700 text-center mt-4 transition-transform duration-300 transform hover:scale-110'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
