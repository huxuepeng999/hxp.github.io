import React from 'react'
import { Foo } from 'dumi-hxp'

const Foo1 = (props: any) => {

    const { title } = props

    return (
        <div>{`Foo1${title}`}
            <Foo title="t1" />
        </div>
    )
}

export default Foo1