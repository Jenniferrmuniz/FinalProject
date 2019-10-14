import React, { Component } from 'react'


class DogDetails extends Component {


  getInfo = () => {
    let str;
    if (this.props.dogInfo) {

      str = <div>
        <div className='dogName'>
          <img src={this.props.dogInfo.photos[0].small} />
          <h1>{this.props.dogInfo.name}</h1>
        </div>
        <div>
          <p>{this.props.dogInfo.gender}</p>
          <p>{this.props.dogInfo.size}</p>
          <p>{this.props.dogInfo.age}</p>
          <p>{this.props.dogInfo.breeds.primary}</p>
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