import React from 'react'

export default function NavbarButton(props) {
    const { action, image } = props;
  return (
    <div>
        <h1>{action}</h1>
        <img src={image} alt={action} />
    </div>
  )
}
