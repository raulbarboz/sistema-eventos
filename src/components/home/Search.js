import React from 'react';
import { connect } from 'react-redux';

class Search extends React.Component {
    constructor(props){
        super(props)
        console.log(props.eventsStuffs)
    }
    render(){
        return(
            <div>Search Component</div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return{
     // events:selectEvents(state.events, state.filters)
      eventsStuffs:state.eventsStuffs
    }
  }
  
  export default connect(mapStateToProps)(Search);