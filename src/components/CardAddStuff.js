import React from 'react';
import { Form, Input, Button } from 'reactstrap';

class CardAddStuff extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      stuff: 'Título',
      subtitle: 'Subtítulo',
      amount: 0,
      description: 'Descrição'
    }
  }
  onInputChange = (e) => {
    let stuff = (e.target.name === 'stuff') ? e.target.value : this.state.stuff;
    let subtitle = (e.target.name === 'subtitle') ? e.target.value : this.state.subtitle;
    let description = (e.target.name === 'description') ? e.target.value : this.state.description;
    this.setState({ stuff, subtitle, description })
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                this.setState({ amount });
        }
  }
  addStuff = () => {
    this.props.addStuff(this.state)
  }
  render(){
    return(
      <Form>
          <Input 
          type="text" 
          name="stuff" 
          id="titulo" 
          placeholder ={this.state.stuff} 
          value = {this.state.stuff}
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

        <Button onClick={ this.addStuff }>+</Button>
      </Form>
    )
  }

}
export default CardAddStuff;