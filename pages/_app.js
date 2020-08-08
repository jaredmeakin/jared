import '../styles/global.css'
import Footer from '../components/footer'

export default ({ Component, pageProps }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
