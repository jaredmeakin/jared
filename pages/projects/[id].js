import { getProjectDetail, getProjectIds } from '../../lib/projects'
import Header from '../../components/projectHeader'

export default ({ project }) => {
  return (
    <article className="prose-xl px-6">
      <Header />
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </article>
  )
}

export const getStaticPaths = async () => ({
  paths: getProjectIds(),
  fallback: false,
})

export const getStaticProps = async ({ params }) => ({
  props: {
    project: await getProjectDetail(params.id),
  },
})
