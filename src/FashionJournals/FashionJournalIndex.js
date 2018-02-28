import React from 'react';
import FashionJournalCreate from './FashionJournalCreate';
import { Container, Row, Col } from 'reactstrap';
import FashionJournalCards from './FashionJournalCards';
import FashionJournalHistoryTable from './FashionJournalHistoryTable';

// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class FashionJournalIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            FashionJournals: [],
            fashionhistory: []
        }
        console.log(this.state)
        this.fetchFashionJournals = this.fetchFashionJournals.bind(this);
        this.updateFashionJournalsArray = this.updateFashionJournalsArray.bind(this);
        this.FashionJournalsDelete = this.FashionJournalsDelete.bind(this);
        this.FashionJournalsHistory = this.FashionJournalsHistory.bind(this);
        this.FashionJournalsHistoryDelete = this.FashionJournalsHistoryDelete.bind(this);

    }

    componentWillMount(){
        console.log(this.props.token)
         this.fetchFashionJournals()
         this.fetchFashionJournalsHistory()
    }

    FashionJournalsHistory(event, outfit){
        console.log(event)
        fetch("http://localhost:3005/api/history", {
            method: 'POST',
            body: JSON.stringify({history: {outfit}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
             console.log(logData)
            
        })
    }
    FashionJournalsHistory(event, outfit){
        fetch("http://localhost:3005/api/history", {
            method: 'PUT',
            body: JSON.stringify({history: {outfit}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
             console.log(logData)
            
        })
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

    fetchFashionJournalsHistory(){
        fetch("http://localhost:3005/api/history", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
             console.log(logData)
            return this.setState({fashionhistory: logData})
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
        .then((res) => console.log(res))
        .then(this.updateFashionJournalsArray)
    }
    FashionJournalsHistoryDelete(event){
        console.log(event.target.id)
        fetch("http://localhost:3005/api/history", {
            method: 'DELETE',
            body: JSON.stringify({history: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => this.updateFashionJournalsArray())
    }
    

    render() {
        const fashionjournal = this.state.FashionJournals.length >= 1 ? <FashionJournalCards FashionJournalsHistory={this.FashionJournalsHistory} FashionJournal={this.state.FashionJournals} token=
        {this.props.token} delete={this.FashionJournalsHistoryDelete}/> :
         console.log(this.state.FashionJournals) 
        console.log(this.delete)

        return (
            <Container>
            <Row>
                <Col md="3">
                    <FashionJournalCreate token = {this.props.token} updateFashionJournalsArray={this.updateFashionJournalsArray} />
                </Col>
                <Col md="4">
                    {fashionjournal}
                    
                    {console.log(FashionJournalCreate)}
                </Col>
                <Col md="5">
                <FashionJournalHistoryTable delete = {this.FashionJournalsHistoryDelete} history = {this.state.fashionhistory} />
                </Col>

            </Row>
        </Container>
        )
    }
}



export default FashionJournalIndex
