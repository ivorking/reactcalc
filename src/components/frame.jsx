import React from 'react';
import Screen from './screen';
import Button from './button';

class Frame extends React.Component {

   constructor() {
      super();
      this.state = {
         defaultBackground: true,
         question: '',
         answer: ''
      }
      this.handleClick = this.handleClick.bind(this);
   }

   toggleChildBackground() {
      const newBackground = !this.state.defaultBackground
      this.setState({defaultBackground: newBackground})
    }

   render() {
      return (
         <div className = "container-fluid ">
            <div className = "frame col-xs-8 col-xs-offset-2">
               <div className = "calculator-title row">
                  Calculator of Doom
               </div>
               <Screen question={this.state.question} answer={this.state.answer}/>
               <div className = "buttonTable">
                  <div className = "btn-row row">
                     <div className = "btnContainer">
                        <Button className='col-xs-2 btn-primary' label={'1'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'2'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'3'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'4'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-info' label={'-'} handleClick={this.handleClick} type='action' />
                        <Button className='col-xs-2 btn-info' label={'+'} handleClick={this.handleClick} type='action' />
                     </div>
                  </div>
                  <div className = "btn-row row">
                     <div className = "btnContainer">
                        <Button className='col-xs-2 btn-primary' label={'5'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'6'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'7'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'8'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-info' label={'*'} handleClick={this.handleClick} type='action' />
                        <Button className='col-xs-2 btn-info' label={'/'} handleClick={this.handleClick} type='action' />
                     </div>
                  </div>
                  <div className = "btn-row row">
                     <div className = "btnContainer">
                        <Button className='col-xs-2 btn-primary' label={'9'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'.'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-2 btn-primary' label={'0'} handleClick={this.handleClick} type='input' />
                        <Button className='col-xs-3 btn-warning' label={'CA'} handleClick={this.handleClick} type='action' />
                        <Button className='col-xs-3 btn-success' label={'='} handleClick={this.handleClick} type='action' />
                     </div>
                  </div>
                  <div className = "btn-row row">
                     <div className = "btnContainer">
                        <Button className='col-xs-2 btn-primary specbutton' label={"Don't click me"} handleClick={this.handleClick} type='input' />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   handleClick(event) {
      const value = event.target.value;
      switch ( value ) {
         case '=': {
            const answer = eval(this.state.question).toString();
            this.setState({ answer });
            break;
         }
         case 'CA': {
            this.setState( { question: '', answer: '' });
            break;
         }
         case '*':
         case '+':
         case '-':
         case '/': {
            this.setState({ question: this.state.question += ` ${value} ` });
            break;
         }
         case "Don't click me": {
            this.setState( { question: 'it burns it burns it burns it burns it burns' } );
            this.setState( { answer: 'help help help help help help help help'});
            document.body.className = 'darkerback';
            document.getElementsByClassName('buttonTable')[0].style.display = 'none';
            document.getElementsByClassName('screen')[0].style.border = 'none';
            break;
         }
         default: {
            this.setState({ question: this.state.question += value });
            break;
         }
      }
   }
}

export default Frame;