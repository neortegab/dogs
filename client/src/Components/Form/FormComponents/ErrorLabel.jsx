import React from 'react'

export default function ErrorLabel(props) {

    const { error } = props;

  return (
    <p> {error} </p>
  )
}
