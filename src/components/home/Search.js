import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import selectEvents from '../../selectors/events';

class InputSearch extends React.Component{
    constructor(props){
        super(props)
    }
    handlerInput(e){
        const inputText = e.target.value;
        console.log(this.props)
        if(inputText){
            
        }
    }
    render(){
        return(
            <input type="text" name="input-search" onChange={this.handlerInput}/>
        )
    }
}

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
            <InputSearch />
            { this.props.eventsStuffs.map((event, key) => {
                if(event.event_type === "events"){
                    return <EventParent key={event.event_id} {...event} />
                }       
             })}
            </div>
        )
    }
}

const mapDispatchToProps = (text) => {
    return{
        dispatchFilter: (text) => dispatch(setTextFilter(text))
    }
}

const mapStateToProps = (state) => {
    return{
      // events:selectEvents(state.events, state.filters)
      filters: state.filters,
      eventsStuffs:selectEvents(state.eventsStuffs ,state.filters)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);