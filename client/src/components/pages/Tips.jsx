import React, { Component } from 'react'

class Tips extends Component {
  render() {
    return (
      <div className='tipsPage'>

        <h1>Adoption Tips <img className='walking-dog' src='../../walking-dog.png' /></h1>




        <div className="accordion tips-list" id="accordionExample">
          <div className="card each-tip">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  When considering a shelter dog for adoption, keep the dog’s situation in mind.
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Realize the dog is likely anxious and suffering from abandonment. The behavior you see at the shelter—cowering, anxious barking, aloofness—may not be typical for that dog in a home environment.      </div>
            </div>
          </div>
          <div className="card each-tip">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Don’t expect too much immediately from the dog once you take him or her home.
        </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                The dog you adopt may have been left by someone he loved or lost and unable to find his way home. These facts, combined with time spent in the shelter, have likely left him with some emotional trauma. It will take him a while to feel safe and secure.
      </div>
            </div>
          </div>
          <div className="card each-tip">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Create a routine.
        </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                A great way to help your dog get comfortable in her new home is to give her a routine. Feed her in the same place and at the same time every day. Take her for a walk at the same time each day, and take the same route. Knowing what to expect each day will help lessen her anxiety.
      </div>
            </div>
          </div>
          <div className="card each-tip">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Have patience.
        </button>
              </h2>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div className="card-body">
                It will take your dog time to learn to trust you and to understand the rules of the house. Just when it seems as if your dog is starting to catch on to what you want, you may see a temporary backslide. While some dogs adapt fairly quickly to a new home, others may take many months before they start to feel like a member of the family. Patience is key and will pay off in the long run.
      </div>
            </div>
          </div>
          <div className="card each-tip">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Enroll in training class.
        </button>
              </h2>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div className="card-body">
                Once your dog has had some time to settle in, sign up for a training class which uses humane training techniques. Taking your dog to class once a week will put him on the fast track to learning how to respond to requests from you. Attend a class that utilizes play and treats to teach the dog. Training should be fun for you and your dog. It will also speed up the bonding process, help you communicate with him, and increase his overall confidence.
      </div>
            </div>
          </div>
        </div>



        <div className='tips-list'>

        </div>

      </div>
    )
  }
}

export default Tips