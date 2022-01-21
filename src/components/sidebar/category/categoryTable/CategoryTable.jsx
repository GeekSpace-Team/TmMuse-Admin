import React from 'react'
import { Table } from 'react-bootstrap'
import './CategoryTable.css'

const CategoryTable = () => {
    return (
        <div>
            <Table responsive borderless className='categoryTable'>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Berkarar</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Berkarar</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Berkarar</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Berkarar</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Berkarar</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Berkarar</td>
            </tr>
           
            </Table>
        </div>
    )
}

export default CategoryTable
