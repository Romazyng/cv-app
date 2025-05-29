import placeholder from '../assets/avatar-placeholder.png'

export default function CardAside({ photo, address, phone, email, github }) {
  return (
    <aside
      className="bg-[#284b63] w-full p-7 flex flex-col gap-6"
      style={{ gridArea: 'aside' }}
    >
      <img
        src={photo || placeholder}
        alt="user avatar"
        className="rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h3 className="border-b text-[#eef0eb] border-gray-400 text-xl font-semibold capitalize">
          personal information
        </h3>
        <h4 className="capitalize text-lg font-semibold text-gray-400">
          home address
          <p className="text-base normal-case font-normal text-[#eef0eb]">{address}</p>
        </h4>
        <h4 className="capitalize text-lg font-semibold text-gray-400">
          phone number
          <p className="text-base normal-case font-normal text-[#eef0eb]">{phone}</p>
        </h4>
        <h4 className="capitalize text-lg font-semibold text-gray-400">
          email
          <p className="text-base normal-case font-normal text-[#eef0eb]">{email}</p>
        </h4>
        <h4 className="capitalize text-lg font-semibold text-gray-400">
          github
          <p className="text-base normal-case font-normal text-[#eef0eb]">{github}</p>
        </h4>
      </div>
    </aside>
  )
}