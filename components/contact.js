import Email from '../assets/email.svg'
import GitHub from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'

export default () => {
  const buttonClass =
    'w-12 h-12 p-3 transition duration-200 ease-in-out rounded-full sm:w-16 sm:h-16 sm:p-4 hover:bg-accent-1 hover:text-white'

  return (
    <div className="flex justify-end mt-1 space-x-2 text-black sm:mt-2">
      <a
        href="https://www.linkedin.com/in/jaredmeakin/"
        className={buttonClass}
      >
        <LinkedIn />
      </a>

      <a href="mailto:hello@jaredmeakin.com" className={buttonClass}>
        <Email />
      </a>

      <a href="https://github.com/jaredmeakin/" className={buttonClass}>
        <GitHub />
      </a>

      <a href="https://twitter.com/jaredmeakin" className={buttonClass}>
        <Twitter />
      </a>
    </div>
  )
}
