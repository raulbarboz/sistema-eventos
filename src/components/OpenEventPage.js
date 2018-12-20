import React from 'react';
import { connect } from 'react-redux';
import CardOpenEventPage from './CardOpenEventPage';
import CardEditEventPage from './CardEditEventPage';
import CardAddStuff from './CardAddStuff';
import CardStuffItem from './CardStuffItem';
import { IoMdCheckbox, IoMdCreate } from "react-icons/io";
import { startEditEvent } from '../actions/events';
import { startAddStuff, startSetStuffs, startRemoveStuff } from '../actions/stuffs';

class OpenEventPage extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      toggle: false,
      stuff:{
        stuff: 'Título',
        subtitle: 'Subtítulo',
        description: 'Descrição',
        url: 'none',
        imageName: 'none'
      }
    }
  }
  
  toggleEdit = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  
  removeStuff = (id) => {
    this.props.dispatch(startRemoveStuff(id, this.props.event.id))
    console.log('gol')
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
        {this.props.stuffs.map((stuff, index) => {
          if((index + 1) % 3){
          return <CardStuffItem  onRemoveStuff={this.removeStuff} key={index} {...stuff} styleClass="list-item margin-right" />
          }else{
          return <CardStuffItem  onRemoveStuff={this.removeStuff} key={index} {...stuff} styleClass="list-item"/>
          }
        })
      }
       <CardAddStuff 
        AddStuff={(props) => {
          this.props.dispatch(startAddStuff(this.props.event.id, this.state.stuff))
        }}
        />
      </div>
      </div>
  )
  }
}


const mapStateToProps = (state, props) => {
  return {
    event: state.events.find((event) => event.id === props.match.params.id),
    stuffs: state.stuffs.filter((stuff) => stuff.parent_id === props.match.params.id )
  }
}

export default connect(mapStateToProps)(OpenEventPage);
