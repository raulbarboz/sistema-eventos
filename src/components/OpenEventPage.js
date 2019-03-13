import React from 'react';
import { connect } from 'react-redux';
import CardOpenEventPage from './CardOpenEventPage';
import CardEditEventPage from './CardEditEventPage';
import CardAddStuff from './CardAddStuff';
import CardStuffItem from './CardStuffItem';
import { IoMdCheckbox, IoMdCreate } from "react-icons/io";
import { startEditEvent } from '../actions/events';
import { startAddStuff, startRemoveStuff } from '../actions/stuffs';
import { Table } from 'reactstrap';

class OpenEventPage extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      toggle: false,
      stuff:{
        stuff: 'Título',
        subtitle: 'Subtítulo',
        description: 'Descrição',
        price: '0',
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
  
  removeStuff = (data, eventId) => {
    const id = data;
    this.props.dispatch(startRemoveStuff(id, eventId));
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
      <Table striped>
        <thead>
          <tr>
            <th>Título</th>
            <th>Subtítulo</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {this.props.stuffs.map((stuff, index) => {
              return <CardStuffItem  onRemoveStuff={this.removeStuff} key={index} {...stuff} styleClass="list-item"/>
            })
          }
        </tbody>
      </Table>
       <CardAddStuff 
        addStuff={(props) => {
          this.props.dispatch(startAddStuff(this.props.event.id, props))
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
