import React, { Component } from 'react'
import baseURL from '../../config'



class DogDetails extends Component {

  state = {
    adj: ['great', 'good', 'meh', 'stinky', 'terrible'],
    toggleContact: false
  }



  getInfo = () => {
    let str;
    if (this.props.dogInfo) {

      // let total = this.props.dogInfo.total

      // for (let k in total) {
      //   //console.log(total[k], k, '=-=-=-=-=-=- ', this.state.adj[total[k]])
      //   console.log('For ', k, ' this dog and you were ', this.state.adj[total[k]])
      // };

      let { name, photos, gender, size, age, breeds, total } = this.props.dogInfo
      if (total.score === 0) {
        let perfectMatch = <p>** Perfect Match **</p>
      }

      
      for (let k in total) {
        if (total[k] !== breeds.primary) {
          console.log(k);
          console.log(total[k]);
        }


      }






      let main = <div className='dogName'>
        <img src={photos[0].small} />
        <h1>{name}</h1>
      </div>

      let info = <div>
        <p>{gender}</p>
        <p>{size}</p>
        <p>{age}</p>
        <p>{breeds.primary}</p>
      </div>


      // if(){

      // }
      let breedDetails = <div></div>

      str = <div>
        {main}
        {info}
        {breedDetails}
        <button className='contact-btn' onClick={() => { this.setState({ toggleContact: true }) }}>Contact</button>
      </div>

      // for(let i=0; i<this.props.dogInfo.attributes.length; i++){
      //   if(this.props.dogInfo.attributes[i]){
      //     str = str + <p>{this.props.dogInfo.attributes[i]}</p>
      //   }
      // }

    }
    return str;
  }


  //value={this.props.dogInfo.contact.email}

  contact = () => {


    if (this.state.toggleContact) {
      return <div>
        <form className='send-email' action="/send-email" method="post">
          <div className='email-div'>
            <div>
              <label htmlFor="">To</label>
              <input type="email" name="toEmail" id="" />
            </div>
            <div>
              <label htmlFor="">From</label>
              <input type='email' name='fromEmail' value={this.props.theUser.email} />
            </div>
          </div>

          <div className='subject-div'>
            <label htmlFor="">Subject</label>
            <input type="text" name="subject" id="" />
          </div>
          <div className='message-div'>
            <label htmlFor="">Message</label>
            <textarea type="text" name="message" id=""></textarea>
          </div>
          <div className='btn-div'>
            <button type="submit">Submit</button>
          </div>

        </form>
      </div>
    }
  }



  render() {

    console.log(this.props);
    return (
      <div>
        <div className='infoWrapper'>
          {this.getInfo()}
          {/* {this.getBreedInfo()} */}
        </div>
        <div className='emailWrapper'>
          <button className='closeEmailWrapper'>X</button>
          {this.contact()}
        </div>

      </div>
    )
  }
}

export default DogDetails