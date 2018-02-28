<h3>Fashion Journal</h3>
             <hr />
            <Table hover striped>
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Outfit</th>
                         <th>Weather</th>
                         <th>Occasion</th>
                         <th>Mood</th>
                     </tr>                 </thead>
                 <tbody>

                     {

                      props.FashionJournal.map((fashionjournal, id) => {
                                 <tr key={id}>
                                     <th scope="row">{fashionjournal.id}</th>
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
    );
}
