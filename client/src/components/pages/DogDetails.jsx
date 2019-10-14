import React, { Component } from 'react'


class DogDetails extends Component {

  state = {
    adj: ['great', 'good', 'meh', 'stinky', 'terrible']
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
      </div>

      // for(let i=0; i<this.props.dogInfo.attributes.length; i++){
      //   if(this.props.dogInfo.attributes[i]){
      //     str = str + <p>{this.props.dogInfo.attributes[i]}</p>
      //   }
      // }

    }
    return str;
  }


  contactInfo = () => {
    if (this.props.dogInfo) {
      return <button>Contact</button>
    }
  }



  render() {

    console.log(this.props);
    return (
      <div>
        {this.getInfo()}
        {/* {this.getBreedInfo()} */}
        {this.contactInfo()}
      </div>
    )
  }
}

export default DogDetails