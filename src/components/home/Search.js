import React from 'react';
import { connect } from 'react-redux';

class EventParent extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div>{this.props.event_type}</div>
        )
    }
}

class Search extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            { this.props.eventsStuffs.map((event, key) => {
                    return <EventParent key={key} {...event} />       
             })}
            </div>
            
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