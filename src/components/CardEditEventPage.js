import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { IoMdTrash } from "react-icons/io";
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
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
      popoverOpen: false,
      startDate: props.event.startDate ? moment(props.event.startDate) : moment(),
      endDate: props.event.endDate ? moment(props.event.endDate) : moment()
    }
  }

  componentDidUpdate() {
    if(this.state.endDate !== null && this.state.startDate !== null){
      this.onSubmitChange()
    }
  }
  onEventChange = (e) =>{
    const event = e.target.value;
    this.setState({ event })
  }
  onSubtitleChange = (e) =>{
    const subtitle = e.target.value;
    this.setState({ subtitle })
  }
  onDescriptionChange = (e) =>{
    const description = e.target.value;
    this.setState({ description })
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({calendarFocused: focused }))
  }
  removeImage = () => {
    console.log(this.props.event.id)
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
        createdAt: this.state.createdAt.valueOf(),
        startDate: this.state.startDate.valueOf(),
        endDate: this.state.endDate.valueOf()
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
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate }) }// PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              minimumNights={0}
            />
        </CardBody>
      </Card>
      )
  }
}

export default CardEditEventPage;