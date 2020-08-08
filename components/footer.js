export default () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="mt-24 mb-6 text-center">
      Copyright &copy; {currentYear}, Jared Meakin
    </div>
  )
}
