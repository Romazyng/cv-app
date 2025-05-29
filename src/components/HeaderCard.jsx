export default function HeaderCard({ firstName, lastName, title }) {
  return (
    <div
      className="bg-[#153243] flex flex-col justify-center gap-0 pl-10"
      style={{ gridArea: 'header' }}
    >
      <h2 className="text-2xl text-gray-50 font-bold">
        {firstName || 'Name'} {lastName}
      </h2>
      <p className="text-xl text-gray-50 font-medium">{title || 'Title'}</p>
    </div>
  )
}