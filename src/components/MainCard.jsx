import Exp from './Exp'
import Edu from './Edu'

import { v4 as uuidv4 } from 'uuid';

export default function MainCard({ description, experState, eduState }) {
  const exp = []
  const edu = []
  for (let i = 0; i < experState.length; i += 1) {
    const node = (
      <Exp
        key={uuidv4()}
        position={experState[i][1]}
        company={experState[i + 1][1]}
        city={experState[i + 2][1]}
        from={experState[i + 3][1]}
        to={experState[i + 4][1]}
      />
    )
    exp.push(node)
    i += 4
  }
  for (let i = 0; i < eduState.length; i += 1) {
    const node = (
      <Edu
        key={uuidv4()}
        name={eduState[i][1]}
        city={eduState[i + 1][1]}
        degree={eduState[i + 2][1]}
        subject={eduState[i + 3][1]}
        from={eduState[i + 4][1]}
        to={eduState[i + 5][1]}
      />
    )
    edu.push(node)
    i += 5
  }
  return (
    <div
      className="bg-[#eef0eb] flex flex-col p-10 gap-8"
      style={{ gridArea: 'main' }}
    >
      <div className="flex flex-col gap-3">
        <h3 className="border-b text-blue-900 border-gray-300 text-2xl font-semibold capitalize">
          description
        </h3>
        <div className="italic text-2xl text-gray-800">
          {description || '-'}
        </div>
      </div>

      <div className="flex flex-col gap-5 text-gray-800">
        <h3 className="border-b text-blue-900 border-gray-300 text-2xl font-semibold capitalize">
          experience
        </h3>
        {exp.length > 0 ? exp : '-'}
      </div>

      <div className="flex flex-col gap-5 text-gray-800">
        <h3 className="border-b text-blue-900 border-gray-300 text-2xl font-semibold capitalize">
          education
        </h3>
        {edu.length > 0 ? edu : '-'}
      </div>
    </div>
  )
}