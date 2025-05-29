import HeaderCard from './HeaderCard'
import MainCard from './MainCard'
import CardAside from './CardAside'

import { forwardRef } from 'react'

const Card = forwardRef(function Card({ states }, ref) {
  return (
    <div ref={ref} className="w-full max-w-6xl grid shadow-2xl">
      <HeaderCard
        firstName={states.name}
        lastName={states.surname}
        title={states.title}
      />
      <MainCard
        description={states.description}
        experience={states.experiences}
        education={states.education}
        experState={states.experState}
        eduState={states.eduState}
      />
      <CardAside
        photo={states.image}
        address={states.address}
        phone={states.number}
        email={states.email}
        github={states.github}
      />
    </div>
  )
})

export default Card