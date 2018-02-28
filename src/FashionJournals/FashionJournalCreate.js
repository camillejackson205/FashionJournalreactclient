import React from 'react';
import { Card, CardImg, CardText, CardBlock,
 CardTitle, CardSubtitle, Button, Form, FormGroup, Input, Label } from 'reactstrap';


class  FashionJournalCreate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            outfit: '',
            weather: '',
            mood: '',
            occassion: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3005/api/style", {
            method: 'POST',
            body: JSON.stringify({ style: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })

            .then((res) => res.json())
            .then((LogData) => {
                this.props.updateFashionJournalsArray()
                // this is where you would clear out the fields
            })
        }
render () {       
   return (
      <div>
          <h5> "Wear your heart on your sleeve, and your brain in your sweater." </h5>
          <hr />
          <Form onSubmit={this.handleSubmit} >
              {/* result/ outfit
              <FormGroup>
                  <Label for="outfit">outfit</Label>
                  <input id="outfit" type="text" name="outfit" placeholder="" onChange={this.handleChange} />
                  </FormGroup> */}
                  {/* definition/ weather */}
                  <FormGroup>
                      <Label for="weather">Weather</Label>
                      <Input type="select" name="weather" id="weather" onChange={this.handleChange} placeholder="Type">
                      <option></option>
                      <option value="winter">Winter</option>
                      <option value="summer">Summer</option>
                      <option value="fall">Fall</option>
                      </Input>
                      </FormGroup>
                      {/* occassion */}
                     <FormGroup>
                         <Label for="occassion">occassion</Label>
                         <Input type="select" name="occassion" id="occassion" onChange={this.handleChange} placeholder="Type">
                             <option></option>
                             <option value="fancy">Fancy</option>
                             <option value="casual">Casual</option>
                             <option value="business">Business</option>
                         </Input>
                     </FormGroup>
                     {/* mood */}                     <FormGroup>
                        <Label for="mood">mood</Label>
                        <Input type="select" name="mood" id="mood" onChange={this.handleChange} placeholder="Type">
                           <option></option>
                            <option value="frusterated">Frusterated</option>
                             <option value="happy">Happy</option>
                             <option value="tired">Tired</option>
                         </Input>
                     </FormGroup>
                     <Button type="submit" color="grey"> get outfit. </Button>
                </Form>
             </div> 
         )
     }
 }

 export default FashionJournalCreate;

                        
                        