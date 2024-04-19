export default function SkillCart({ name, description, icon }) {
    return (
      <div className="flex w-[48%] md:w-[31.5%] lg:w-[23.5%] justify-between border border-gray-200 p-3 rounded-md" style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;' }}>
        <div>
          <p className="border border-gray-200 rounded-md rotate-45 -mt-8 p-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;' }}>{icon}</p>
        </div>
        <div>
          <h5 className="font-medium text-lg">{name}</h5>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    )
  }