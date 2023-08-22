import AnimateWrapper from 'components/AnimateWrapper'

export default function Greeting() {
  return (
    <AnimateWrapper>
      <div className="bg-white/30 flex items-center justify-center w-full p-3 rounded-lg text-dark dark:text-light">
        Hello, I am an App Developer based in Australia!
      </div>
    </AnimateWrapper>
  )
}
