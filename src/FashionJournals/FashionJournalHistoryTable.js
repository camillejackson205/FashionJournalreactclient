import React from 'react'
import { Table, Button } from 'reactstrap';




const FashionJournalHistoryTable = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Fashion Journal</h3>

            <Table hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Outfit</th>
                        <th>Weather</th>
                        <th>Occasion</th>
                        <th>Mood</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        props.history.map((fashionjournal, id) => {
                            return(
                            <tr key={id}>
                                <th>{fashionjournal.id}</th>
                                <td>{fashionjournal.outfit}</td>
                                <td>{fashionjournal.occassion}</td>
                                <td>{fashionjournal.mood}</td>
                                <td>{fashionjournal.weather}</td>
                                <td><Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button></td>
                                
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}



export default FashionJournalHistoryTable;