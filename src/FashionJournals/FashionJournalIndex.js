import React from 'react';
import FashionJournalCreate from './FashionJournalCreate';
import { Container, Row, Col } from 'reactstrap';
import FashionJournalCards from './FashionJournalCards';

// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class FashionJournalIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            FashionJournals: []
        }
        console.log(this.state)
        this.fetchFashionJournals = this.fetchFashionJournals.bind(this);
        this.updateFashionJournalsArray = this.updateFashionJournalsArray.bind(this);
        this.FashionJournalsDelete = this.FashionJournalsDelete.bind(this);
    }

    componentWillMount(){
        console.log(this.props.token)
         this.fetchFashionJournals()
    }

    fetchFashionJournals(){
        fetch("http://localhost:3005/api/style", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
             console.log(logData)
            return this.setState({FashionJournals: logData})
        })
    }



    updateFashionJournalsArray(){
        this.fetchFashionJournals()
    }

    FashionJournalsDelete(event){
        fetch("http://localhost:3005/api/style", {
            method: 'DELETE',
            body: JSON.stringify({log: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => this.updateFashionJournalsArray())
    }

    render() {
        const fashionjournal = this.state.FashionJournals.length >= 1 ? <FashionJournalCards FashionJournal={this.state.FashionJournals} token=
        {this.props.token} delete={this.FashionJournalsDelete}/> :
         console.log(this.state.FashionJournals) 
        console.log(this.props)

        return (
            <Container>
            <Row>
                <Col md="3">
                    <FashionJournalCreate token = {this.props.token} updateFashionJournalsArray={this.updateFashionJournalsArray}/>
                </Col>
                <Col md="9">
                    {fashionjournal}
                    {console.log(FashionJournalCreate)}
                </Col>
            </Row>
        </Container>
        )
    }
}



export default FashionJournalIndex