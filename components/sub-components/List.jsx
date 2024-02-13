import React from 'react'

function List({ id, ns_number, name}) {
    return (
        <tr className='text-center'>
            <th>{id}</th>
            <td>{ns_number}</td>
            <td>{name}</td>
        </tr>
    )
}

export default List