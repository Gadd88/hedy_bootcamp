import React from 'react'

type Props = {
    msg: string
}

export default function ErrorMsg({msg}: Props): React.JSX.Element {
  return (
    <p className='bg-red-800 p-4 text-white text-lg font-semibold text-center rounded-xl'>
        {msg}
    </p>
  )
}
