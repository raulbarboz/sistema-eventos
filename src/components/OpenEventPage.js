import React from 'react';
import { connect } from 'react-redux';
import CardOpenEventPage from './CardOpenEventPage';
import CardEditEventPage from './CardEditEventPage';
import CardAddStuff from './CardAddStuff';
import { IoMdCheckbox, IoMdCreate } from "react-icons/io";
import { startEditEvent } from '../actions/events'

class OpenEventPage extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      toggle: false
    }
  }
  
  toggleEdit = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render(){
    return(
    <div>
      <div className="page-header">
          <div className="content-container position-relative">
          <button 
            onClick={this.toggleEdit}
            className="button-toggleEdit"
          >
            {this.state.toggle ? <IoMdCheckbox /> : <IoMdCreate />}
          </button>
          {
            this.state.toggle ? 
            <CardEditEventPage 
            onSubmitChange={
              (editEvent, props) => {  
               this.props.dispatch(startEditEvent(this.props.event.id, editEvent))
              } 
            }
            {...this.props} /> : 
            <CardOpenEventPage {...this.props} />
          }
          </div>
      </div>
      <div className="content-container">
        <CardAddStuff />
      </div>
    </div>

  )
  }
}


const mapStateToProps = (state, props) => {
  return {
    event: state.events.find((event) => event.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(OpenEventPage);
