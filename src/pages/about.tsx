import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import { SpikeBounce } from '@/components/spike';
import { components } from '@/components/mdxComponents';
const MyPersonalWebsite = React.lazy(
  () => import('@/contents/blogs/my-personal-website.mdx'),
);

const About = (): JSX.Element => (
  <React.Suspense
    fallback={
      <RotatingSquare
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading"
      />
    }
  >
    <>
      <SpikeBounce />
      <section className="pt-12 pb-4 mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-4xl">
          About Me
        </h1>
        <p className="mb-12 text-lg text-center ">
          I'm Yi Cai. People call me Yi, Tracy, CY ("see why"), or whatever they
          like.
        </p>
        <p className="mb-12 text-lg mx-24">
          I'm currently pursuing my Master's degree in Electrical and Computer
          Engineering at Carnegie Mellon University. My focus will be on
          principles of programming languages. Before that, I worked full-time
          as a Software Developer at Cyphercor Inc. for one year. My main job
          was developing and implementing two-factor authentication including
          the security services, and frontend and backend applications, ensuring
          consistent utilization of customer requirements. I earned my first
          Master's degree in Electrical and Computer Engineering at the
          University of Waterloo in August 2021, with a focus on software
          engineering. And I graduated with a Bachelor of Engineering degree in
          Electronic Information Engineering from the University of Electronic
          Science and Technology of China.
        </p>
        <p className="mb-12 text-lg mx-24">
          From my background, it seems that I am a very technical or even nerdy
          person &mdash; I did my bachelors at UESTC, a university famous in the
          field of electrical information and communication engineering, and a
          place where literally every human being is keen on robotics,
          artificial intelligence, and machine learning. Then I went to the UW,
          which is arguably the most nerdy school in Canada, where every student
          is notoriously hard-working and constantly switching modes between 8
          courses per semester and co-ops (no offense, I love uw and I met my
          girlfriend there!). Now I'm pursuing my 2nd Master's degree at CMU,
          yet another HARD HARD HARD school.
        </p>
        <p className="mb-12 text-lg mx-24">
          Well, yeah I am indeed very technical. I tend to bind things with
          logic, I enjoy tackling hard technical problems and digging into every
          technical details, and I am just curious about how things work
          exactly.
        </p>
        <p className="mb-12 text-lg mx-24">
          But not quite! Apart from being technical, I also care about
          aesthetics (if you happen to like the design of this website), music
          (I am a big fan of r&b, jazz, funk, pop rock, country, folk and dance
          music), sports (I watch all kinds of sports and I particularly love
          playing basketball), and the wilds (I prefer living in the countryside
          to the cities).
        </p>
        <p className="mb-12 text-lg mx-24">
          I developed this website mainly 1. for fun, and 2. to keep track of my
          academic, professional, and personal journey, and 3. to share my
          thoughts and ideas with the world. I hope you enjoy your stay here!
        </p>
      </section>
    </>
  </React.Suspense>
);

export default About;
