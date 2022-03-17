import React from 'react'
import Statics from '../OtherComps/Statics'
import Statistics from '../OtherComps/Statistics'
import Button from '../OtherComps/Button'


class Feedback extends React.Component{    
    constructor(){
        super()
        this.state = {
            goodCounter: 0,
            neutralCounter: 0,
            badCounter: 0,
            value: 0
        }
    }
            
    average
    =() =>{
        const average
        = ((this.state.goodCounter - this.state.badCounter)/(this.state.goodCounter + this.state.neutralCounter + this.state.badCounter)).toFixed(1) 
        return average
        ;
    }

    positive
     = () =>{
        const positive = ((this.state.goodCounter / (this.state.goodCounter + this.state.neutralCounter + this.state.badCounter))*100).toFixed(1)
        return positive
    }
    
    render(){

        return(
            <div>
               <p>Send FeedBack</p>
                <Button handleClick={() => 
                    this.setState({goodCounter : this.state.goodCounter +1, value:this.state.value+1})} text={"Good"}/>

                <Button handleClick={() => 
                    this.setState({neutralCounter : this.state.neutralCounter +1, value:this.state.value+1})} text={"Neutral"}/>

                <Button handleClick={() => 
                    this.setState({badCounter : this.state.badCounter +1, value:this.state.value+1})} text={"Bad"}/>

                <p>Statistics</p>
                {
                    this.state.value > 0 ? (
            <div>
              <table>
                 <tbody>
                    <Statics name={"Good"} stats={this.state.goodCounter}/>

                    <Statics name={"Neutral"} stats={this.state.neutralCounter}/>

                    <Statics name={"Bad"} stats={this.state.badCounter}/>
                        <Statistics name={"Average"} statisti={this.average
                        ()}/>
                        <Statistics name={"Positive"} statisti={this.positive
                        ()}/>
                </tbody>
             </table>
            </div>
                    ) : (
                      <h3>No feedbacks recived</h3>
                    )
                }   
            </div>
        )
    }

      
}


export default Feedback