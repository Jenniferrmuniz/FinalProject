import React, { Component } from 'react'


class DogDetails extends Component {

  state = {
    adj: ['great', 'good', 'meh', 'stinky', 'terrible'],
    toggleContact: false
  }

  getInfo = () => {
    let str;
    if (this.props.dogInfo) {
      let total = this.props.dogInfo.total
      for (let k in total) {
        //console.log(total[k], k, '=-=-=-=-=-=- ', this.state.adj[total[k]])
        console.log('For ', k, ' this dog and you were ', this.state.adj[total[k]])
      };

      let { name, photos, gender, size, age, breeds } = this.props.dogInfo

      str = <div>
        <div className='dogName'>
          <img src={photos[0].small} />
          <h1>{name}</h1>
        </div>
        <div>
          <p>{gender}</p>
          <p>{size}</p>
          <p>{age}</p>
          <p>{breeds.primary}</p>
        </div>
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




  contact = () => {
    if (this.state.toggleContact) {
      return <div>
        <form action="/send-email" method="post">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" value={this.props.dogInfo.contact.email} />
          <label htmlFor="">Subject</label>
          <input type="text" name="subject" id="" />
          <label htmlFor="">Message</label>
          <textarea type="text" name="message" id=""></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    }
  }



  render() {

    console.log(this.props);
    return (
      <div>
        {this.getInfo()}
        {/* {this.getBreedInfo()} */}
        {this.contact()}
      </div>
    )
  }
}

export default DogDetails