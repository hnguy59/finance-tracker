import AnimateWrapper from 'components/AnimateWrapper'

export default function work() {
  return (
    <AnimateWrapper>
      <div className="flex flex-col gap-4 text-dark dark:text-light">
        <div className="text-lg font-bold underline decoration-[3px]">Work</div>
        <div className="text-justify hyphens-auto">
          A software engineer based in Brisbane with a passion for building digital
          services/anything I want. I enjoy a multitude of things from planning and designing all
          the way to solving real-life problems with code.
        </div>
      </div>
    </AnimateWrapper>
  )
}
