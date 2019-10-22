import React, { Component } from 'react'
import baseURL from '../../../config'
import Axios from 'axios';



class DogDetails extends Component {

  state = {
    toggleContact: false
  }


  // Gets detailed info about the dog
  getInfo = () => {
    let str;
    if (this.props.dogInfo) {

      let { name, photos, gender, size, age, breeds, total, contact } = this.props.dogInfo
      if (total.score === 0) {
        // let perfectMatch = <p>** Perfect Match **</p>
      }


      let progressBar;
      let category = [];
      for (let key in total) {


        switch (total[key]) {
          case 1:
            progressBar = 'lowest';
            break;
          case 2:
            progressBar = 'low';
            break;
          case 3:
            progressBar = 'mid';
            break;
          case 4:
            progressBar = 'high';
            break;
          case 5:
            progressBar = 'highest';
            break;
          default:
            progressBar = 'none'
        }
        let badWords = 'scorename'
        if (!badWords.includes(key)) {
          category.push(<div>
            <span>{key} :</span>
            <div className="progress">
              <div className={"progress-bar progress-bar-striped bg-info " + progressBar} role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>)

        }


      }


      let levels = <div>{category[0]} {category[1]} {category[2]} {category[3]} {category[4]}</div>








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
        {levels}


      </div>






      str = <div className='details'>
        <div className='dogName'>
          <img src={photos[0].large} alt='dog' />
          <h1>{name}</h1>
        </div>
        <div>
          <div className='info-div'>
            <div className='dogDetailsInfo'>
              <p>Gender: {gender}</p>
              <p>Size: {size}</p>
              <p>Age: {age}</p>
              <p>Location: {contact.address.city}, {contact.address.state}</p>
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


  contact = () => {


    if (this.state.toggleContact) {
      return <div>
        <form className='send-email' onSubmit={this.submitForm}>
          <div className='email-div'>
            <div>
              <label htmlFor="">To</label>
              <input type="email" name="toEmail" id="" value={this.props.dogInfo.contact.email} />
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
          <p>Don't forget to put your contact infornation so that they can reach you!</p>
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