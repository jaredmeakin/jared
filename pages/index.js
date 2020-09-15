import Head from 'next/head'
import SvgUX from '../assets/ux.svg'
import SvgVue from '../assets/vue.svg'
import SvgChat from '../assets/chat.svg'
import SvgDocs from '../assets/docs.svg'
import SvgNode from '../assets/node.svg'
import SvgReact from '../assets/react.svg'
import SvgGames from '../assets/games.svg'
import SvgPeople from '../assets/people.svg'
import SvgExpress from '../assets/express.svg'
import SvgProduct from '../assets/product.svg'
import Logo from '../components/logo'
import Title from '../components/title'
import Contact from '../components/contact'
import Section from '../components/section'
import Description from '../components/description'
import { getProjectList } from '../lib/projects'

export default ({ projects }) => {
  return (
    <div className="p-6">
      <Head>
        <title>Jared Meakin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-wrap justify-end mt-8 mb-32">
        <Logo />
        <Contact />
      </div>

      <Section>
        <Title>Technology</Title>
        <Description>
          I’m having a love affair with <b>JavaScript</b>. Some of my favorite
          frameworks to work with, right now, are:
        </Description>
        <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
          <SvgReact />
          <SvgVue />
          <SvgNode />
          <SvgExpress />
        </div>
      </Section>

      <Section>
        <Title>Skills</Title>
        <Description>
          My life's motto is <b>never stop learning!</b> Aside from being
          passionate about software I'm skilled at:
        </Description>
        <div className="grid grid-cols-1 gap-4 mt-4 text-lg font-medium md:grid-cols-2">
          <SvgUX />
          <SvgProduct />
          <SvgDocs />
          <SvgPeople />
          <SvgChat />
          <SvgGames />
        </div>
      </Section>

      <Section>
        <Title>Projects</Title>
        <Description>
          I really love to <b>do it all</b>! Here are a few examples that should
          help you understand what that means:
        </Description>
        <div className="grid grid-cols-1 gap-8 mt-6 text-lg leading-relaxed sm:grid-cols-2">
          {projects.map((project, index) => (
            <a key={index} href={`/projects/${project?.id}`}>
              <div className="text-2xl font-bold">{project?.title}</div>
              <div>{project?.description}</div>
            </a>
          ))}
        </div>
      </Section>
    </div>
  )
}

export const getStaticProps = async () => ({
  props: {
    projects: getProjectList(),
  },
})
