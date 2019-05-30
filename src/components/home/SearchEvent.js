import React from 'react';
import { connect } from 'react-redux';

function Event(props){
    return(
        <div>
            <p>{props.event}</p>
            <p>{props.subtitle}</p>
            <p>{props.description}</p>
            <hr></hr>
        </div>
    )
}

function Stuff(props){
    return(
        <div>
            <p>{props.stuff}</p>
            <p>{props.subtitle}</p>
            <p>{props.description}</p>
            <hr></hr>
        </div>
    )
}

class SearchEvent extends React.Component{
    constructor(props){
        super(props)
        console.log(props.eventsStuffs)
    }
    render(){
        return(
            <div>
                {this.props.eventsStuffs.map((event, key)=>{
                    return event.event_type === "events" ? <Event key={key} {...event}/> : <Stuff key={key} {...event}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return{
     // events:selectEvents(state.events, state.filters)
      eventsStuffs:state.eventsStuffs.filter((elem)=>{ return elem.event_id === props.match.params.id})
    }
  }

export default connect(mapStateToProps)(SearchEvent);