import React, { Component } from 'react'
import baseURL from '../../config'
import Axios from 'axios';



class DogDetails extends Component {

  state = {
    adj: ['great', 'good', 'meh', 'stinky', 'terrible'],
    toggleContact: false
  }



  getInfo = () => {
    let str;
    if (this.props.dogInfo) {

      let { name, photos, gender, size, age, breeds, total } = this.props.dogInfo
      if (total.score === 0) {
        let perfectMatch = <p>** Perfect Match **</p>
      }

      console.log(this.props.dogInfo)

      let progressBar;
      let levels;
      for (let key in total) {

        console.log(key, total[key]);

        switch (total[key]) {
          case 1:
            progressBar = 'width: 0%';
            break;
          case 2:
            progressBar = 'width: 25%';
            break;
          case 3:
            progressBar = 'width: 50%';
            break;
          case 4:
            progressBar = 'width: 75%';
            break;
          case 5:
            progressBar = 'width: 100%';
            break;
        }


        levels = <div>
          <span>{key}</span>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        console.log(progressBar);

      }







      let breedDetails;
      let breedNames;
      if (breeds.secondary) {
        breedNames = <p>{breeds.primary} and {breeds.secondary}</p>
      }
      else {
        breedNames = <p>{breeds.primary}</p>
      }




      breedDetails = <div className='breedDetails'>

        {breedNames}
        {/* {levels} */}
        <span>Energy</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>Exercise</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>Affection</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>Watchfulness</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>Heat Sensitivity</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>


      </div>






      str = <div className='details'>
        <div className='dogName'>
          <img src={photos[0].small} />
          <h1>{name}</h1>
        </div>
        <div>
          <div className='info-div'>
            <div className='dogDetailsInfo'>
              <p>Gender: {gender}</p>
              <p>Size: {size}</p>
              <p>Age: {age}</p>
              <button className='contact-btn' onClick={() => this.setState({ toggleContact: !this.state.toggleContact })}>Contact</button>
            </div>
            {breedDetails}
          </div>

        </div>
      </div>

    }
    return str;
  }

  submitForm = (e) => {
    e.preventDefault()
    console.log(this.state)
    Axios.post(`${baseURL}/api/all-dogs/send-email`, { state: this.state }).then(res => {
      console.log('sent email', res)
    })

  }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //value={this.props.dogInfo.contact.email}
  //value={this.props.theUser.email}

  contact = () => {


    if (this.state.toggleContact) {
      return <div>
        <form className='send-email' onSubmit={this.submitForm}>
          <div className='email-div'>
            <div>
              <label htmlFor="">To</label>
              <input type="email" name="toEmail" id="" />
            </div>
            <div>
              <label htmlFor="">From</label>
              {/* {this.props.user ? */}
              <input type='email' name='fromEmail' />
              {/* :
                ''
              } */}
            </div>
          </div>

          <div className='subject-div'>
            <label htmlFor="">Subject</label>
            <input type="text" name="subject" id="" onChange={this.handleChange} />
          </div>
          <div className='message-div'>
            <label htmlFor="">Message</label>
            <textarea type="text" name="message" id="" onChange={this.handleChange} ></textarea>
          </div>
          <div className='btn-div'>
            <button type="submit">Submit</button>
          </div>

        </form>
      </div>
    }
  }



  render() {

    console.log(this);
    return (
      <div>
        <div className='infoWrapper'>
          {this.getInfo()}
          {/* {this.getBreedInfo()} */}
        </div>
        <div className={"emailWrapper " + (this.state.toggleContact ? 'show' : 'hidden')}>
          <button className='closeEmailWrapper' onClick={() => this.setState({ toggleContact: !this.state.toggleContact })}>X</button>
          {this.contact()}
        </div>

      </div>
    )
  }
}

export default DogDetails