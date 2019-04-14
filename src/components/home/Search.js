import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EventParent extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <Link to={`/search/${this.props.event_id}`}>
                <div>
                    <h1>{this.props.event}</h1>
                    <h2>{this.props.subtitle}</h2>
                    <p>{this.props.description}</p>
                </div>
            </Link>
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
                if(event.event_type === "events"){
                    return <EventParent key={key} {...event} />
                }       
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