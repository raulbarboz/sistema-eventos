import React from 'react';
import moment from 'moment';
import ImageUpload from './ImageUpload';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
now.format('MMM Do, YYYY');

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        event: props.expense ? props.expense.event : '',
        subtitle: props.expense ? props.expense.subtitle : '',
        description: props.expense ? props.expense.description : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }
  }
    onEventChange = (e) => {
        const event = e.target.value;
        this.setState(() => ({ event }));
    }
    onSubtitleChange = (e) => {
        const subtitle = e.target.value;
        this.setState(() => ({ subtitle }));
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }

    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.event || !this.state.subtitle) {
            const error = 'Os campos -Título e -Subtítulo são obrigatórios';
            this.setState(() => ({error}))
        } else {
            this.setState(() => ({error: '' }))
            this.props.onSubmit({
                event: this.state.event,
                subtitle: this.state.subtitle,
                createdAt: this.state.createdAt.valueOf(),
                description: this.state.description
            })
        }
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                { this.state.error && <p className="form__error">{this.state.error}</p>}
                    <ImageUpload />
                    <input
                    type="text"
                    placeholder="Evento"
                    autoFocus
                    className="text-input"
                    value={this.state.event}
                    onChange={this.onEventChange}
                    />
                    <input
                    type="text"
                    placeholder="Subtítulo"
                    autoFocus
                    className="text-input"
                    value={this.state.subtitle}
                    onChange={this.onSubtitleChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
                    <textarea
                    placeholder="Descricão do Evento"
                    className="textarea"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">Criar</button>
                    </div>
                </form>
        )
    }
}
