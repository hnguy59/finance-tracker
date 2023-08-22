import AnimateWrapper from 'components/AnimateWrapper'

export default function Bio() {
  return (
    <AnimateWrapper>
      <div className="flex flex-col gap-4 text-dark dark:text-light">
        <div className="text-lg font-bold underline decoration-[3px]">Bio</div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <div className="flex font-bold w-1/5">1998, Dec</div>
            <div className="text-justify hyphens-auto w-4/5">
              Born in <b>Brisbane, Australia</b>
            </div>
          </div>
          <div className="flex">
            <div className="flex font-bold w-1/5">2020, Feb</div>
            <div className="text-justify hyphens-auto w-4/5">
              <b>Sunflower Software</b>, A month long internship that focused on Angular best
              practices and building enterprise Java applications with the Spring framework.
            </div>
          </div>
          <div className="flex">
            <div className="flex font-bold w-1/5">2021, June</div>
            <div className="text-justify hyphens-auto w-4/5">
              <b>Bachelor in Information Technology</b>, Computer Science major, Data Science minor
              at the Queensland University of Technology.
            </div>
          </div>
          <div className="flex">
            <div className="flex font-bold w-1/5">2021, Mar to 2022, Jul</div>
            <div className="text-justify hyphens-auto w-4/5">
              <b>Speedwell</b>, my first proper full-time engineering job! Worked with great people
              to develop and maintain sites using multitudes of technologies that best fit the
              project.
            </div>
          </div>
          <div className="flex">
            <div className="flex font-bold w-1/5">2022, Jul to 2023, Jun</div>
            <div className="text-justify hyphens-auto w-4/5">
              <b>Max Kelsen</b>, I have always wanted to work for an AI company that makes a
              positive impact on the world. Work culture, people and projects are amazing.
            </div>
          </div>
          <div className="flex">
            <div className="flex font-bold w-1/5">2023, Jun to 2023, Aug</div>
            <div className="text-justify hyphens-auto w-4/5">
              <b>bdna</b>, a place where I am now a police man. Also developing in Coldfusion was a
              throw back.
            </div>
          </div>
          <div className="flex">
            <div className="flex font-bold w-1/5">2023, Jun to Present</div>
            <div className="text-justify hyphens-auto w-4/5">
              <b>Gretel Analytics</b>(side-hustle), continuing my love for frontend development by
              building a product from the ground up.
            </div>
          </div>
          <div className="flex">
            <div className="flex font-bold w-1/5">2023, Aug to Present</div>
            <div className="text-justify hyphens-auto w-4/5">
              <b>Fujitsu (oobe)</b>, my next adventure!
            </div>
          </div>
        </div>
      </div>
    </AnimateWrapper>
  )
}
