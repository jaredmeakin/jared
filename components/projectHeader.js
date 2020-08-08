import Router from 'next/router'
import SvgJared from '../assets/jaredmeakin-alt.svg'

export default () => {
  return (
    <div className="flex items-center justify-between pt-8 pb-10">
      <a onClick={() => Router.back()} className="cursor-pointer">
        <span>&#8592; Back</span>
      </a>
      <div className="w-64">
        <SvgJared />
      </div>
    </div>
  )
}
