import Greeting from 'components/HomeSections/Greeting'
import Intro from 'components/HomeSections/Intro'
import Work from 'components/HomeSections/Work'
import Bio from 'components/HomeSections/Bio'
import Hobbies from 'components/HomeSections/Hobbies'
import Socials from 'components/HomeSections/Socials'

export default function Index() {
  return (
    <div className="flex flex-col w-full" key="home">
      <div className="flex flex-col w-full gap-8">
        <Greeting />
        <Intro />
        <Work />
        <Bio />
        <Hobbies />
        <Socials />
      </div>
    </div>
  )
}
