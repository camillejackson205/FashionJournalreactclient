import React from 'react';
import FashionJournalIndex from '../FashionJournals/FashionJournalIndex';

class Splash extends React.Component{

    render(){
        return (
            <div>
                <FashionJournalIndex token={this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;