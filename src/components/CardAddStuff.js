import React from 'react';
import { Form, Input, Button } from 'reactstrap';

class CardAddStuff extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      event: 'Título',
      subtitle: 'Subtítulo',
      amount: 0,
      description: 'Descrição'
    }
  }
  onInputChange = (e) => {
    let event = (e.target.name === 'event') ? e.target.value : this.state.event;
    let subtitle = (e.target.name === 'subtitle') ? e.target.value : this.state.subtitle;
    let description = (e.target.name === 'description') ? e.target.value : this.state.description;
    this.setState({ event, subtitle, description })
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                this.setState({ amount });
        }
  }
  render(){
    return(
      <Form>
          <Input 
          type="text" 
          name="event" 
          id="titulo" 
          placeholder ={this.state.event} 
          value = {this.state.event}
          onChange = {this.onInputChange}
          />

          <Input 
          type="text" 
          name="subtitle" 
          id="subtitulo" 
          placeholder ={this.state.subtitle} 
          value = {this.state.subtitle}
          onChange = {this.onInputChange}
          />
          
          <Input 
          type="text" 
          name="amount" 
          id="amount" 
          placeholder ={this.state.amount} 
          value = {this.state.amount}
          onChange = {this.onAmountChange}
          />

          <Input 
          type="textarea" 
          name="description" 
          id="descricao" 
          placeholder ={this.state.description} 
          value = {this.state.description}
          onChange = {this.onInputChange}
          />

        <Button onClick={() => { console.log(this.state)}}>+</Button>
      </Form>
    )
  }

}
export default CardAddStuff;