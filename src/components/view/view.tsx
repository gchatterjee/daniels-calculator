import React from 'react'

interface Props {
  pageKey: string
}

export default function ({ pageKey }: Props): React.JSX.Element {
  return (
    <div>
      <h1>{pageKey}</h1>
    </div>
  )
}
