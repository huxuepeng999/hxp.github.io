import React from 'react'

const Foo1 = (props: any) => {

    const { title } = props

    return (
        <div>{`Foo1${title}`}</div>
    )
}

export default Foo1