import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { IoMdTrash } from "react-icons/io";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
now.format('MMM Do, YYYY');

class CardEditEventPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      event: this.props.event.event,
      subtitle: this.props.event.subtitle,
      description: this.props.event.description,
      createdAt: this.props.event.createdAt ? moment(this.props.event.createdAt) : moment(),
      calendarFocused: false,
      popoverOpen: false
    }
  }
  onEventChange = (e) =>{
    const event = e.target.value;
    this.setState(() => ({ event }),
    () => {
      this.onSubmitChange();
    });
  }
  onSubtitleChange = (e) =>{
    const subtitle = e.target.value;
    this.setState(() => ({ subtitle }),
    () => {
      this.onSubmitChange();
    });
  }
  onDescriptionChange = (e) =>{
    const description = e.target.value;
    this.setState(() => ({ description }),
    () => {
      this.onSubmitChange();
    });
  }
  onDateChange = (createdAt) =>{
    if(createdAt){
      this.setState(() => ({ createdAt }),
      () => {
        this.onSubmitChange();
      });
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({calendarFocused: focused }))
  }
  removeImage = () => {
    
  }
  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  onSubmitChange = () => {
    this.props.onSubmitChange({
      event: this.state.event,
      subtitle: this.state.subtitle,
      description: this.state.description,
      createdAt: this.state.createdAt.valueOf()
    })
  }
  render(){
    return(
      <Card>
          <button 
            id="Popover1"
            onClick={this.removeImage}
            onMouseEnter={this.togglePopover}
            className="button-removeImage"
          >
            <IoMdTrash />
          </button>
          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.togglePopover}>
            <PopoverHeader>Remover Imagem</PopoverHeader>
            <PopoverBody>Após remoção faz-se obrigatório o upload de nova imagem.</PopoverBody>
          </Popover>
        <CardImg top width="100%" src={this.props.event.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <input 
            className="card-edit__input"
            type="text" 
            placeholder={this.props.event.event}
            value={this.state.event}
            onChange={this.onEventChange}
            />
          </CardTitle>
          <CardSubtitle>
            <input 
            className="card-edit__input"
            type="text" 
            placeholder={this.props.event.subtitle}
            value={this.state.subtitle}
            onChange={this.onSubtitleChange}
            />
          </CardSubtitle>
          <CardText>
            <textarea 
            className="card-edit__textarea"
            value={this.state.description} 
            onChange={this.onDescriptionChange} 
            wrap="hard"
            >
            {this.state.description}
            </textarea>
          </CardText>
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
        </CardBody>
      </Card>
      )
  }
}

export default CardEditEventPage;