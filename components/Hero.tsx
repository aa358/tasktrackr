import React from 'react'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <h1 className="bold-52 lg:bold-88">TaskTrackr</h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[1000px]">Effortlessly manage your daily tasks and boost productivity with our intuitive task tracker. Streamline your workflow, prioritize goals, and stay organized—all in one place. From adding tasks on the go to tracking progress seamlessly, our task tracker empowers you to take control of your to-do list. Experience a smarter way to stay on top of your commitments and achieve your goals with our user-friendly and feature-packed task tracking solution.
            </p>
        </div>
    </section>
  )
}

export default Hero
