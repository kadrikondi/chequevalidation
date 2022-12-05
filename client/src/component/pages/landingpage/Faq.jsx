import React from 'react'
import './assets/css/style.css'
import {FiHelpCircle} from "react-icons/fi"
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'
export default function Faq() {
    return (
        <div id="section-bg" className="py-5">
             <section id="faq" className="faq ">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
              
          <a data-toggle="collapse" className="collapse" href="#faq-list-1">   <i className="bx bx-help-circle icon-help " ><FiHelpCircle/></i> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; What is It’s Time For The Blackman’s Revolution<i className="bx bx-chevron-down icon-show" ><FaChevronDown/></i><i className="bx bx-chevron-up icon-close" ><FaChevronUp/></i>
          </a>
                <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                  <p>
                    It’s Time for The Blackman’s Revolution is a legendary book that every Nigerian must read. . This book reveals that Nigeria will become a failed state if the status quo remains and what we can do to avoid it. 
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={100}>
                <a data-toggle="collapse" href="#faq-list-2" className="collapsed"> <i className="bx bx-help-circle icon-help " ><FiHelpCircle/></i> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Who are Blackman’s revolutionist <i className="bx bx-chevron-down icon-show" ><FaChevronDown/></i><i className="bx bx-chevron-up icon-close" ><FaChevronUp/></i></a>
                <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                  <p>
                    Those who have embraced positive change of ethical values and working assiduously to encourage others to change positively for a better Nigeria
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={200}>
             <a data-toggle="collapse" href="#faq-list-3" className="collapsed"> <i className="bx bx-help-circle icon-help " ><FiHelpCircle/></i> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Who can join the Blackman’s Revolution<i className="bx bx-chevron-down icon-show" ><FaChevronDown/></i><i className="bx bx-chevron-up icon-close" ><FaChevronUp/></i></a>
                <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                  <p>
                    Everyone that wants to make a Nigeria a better place
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={300}>
              <a data-toggle="collapse" href="#faq-list-4" className="collapsed"> <i className="bx bx-help-circle icon-help " ><FiHelpCircle/></i> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Why Should I Join The Blackman's Revolution <i className="bx bx-chevron-down icon-show" ><FaChevronDown/></i><i className="bx bx-chevron-up icon-close" ><FaChevronUp/></i></a>
                <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                  <p>
                   To Among the people of better Nigeria
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={400}>
               <a data-toggle="collapse" href="#faq-list-5" className="collapsed"><i className="bx bx-help-circle icon-help " ><FiHelpCircle/></i> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;What Is The Mission of The Blackman's Revolution <i className="bx bx-chevron-down icon-show" ><FaChevronDown/></i><i className="bx bx-chevron-up icon-close" ><FaChevronUp/></i></a>
                <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                  <p>
                    The aims of the required social revolution have been enumerated above, but the list is not in any way exhaustive, for whatever we are found doing as a people that is inimical to the progress and wellbeing of our nation must be worked on. However, these are not going to be an easy task for the following reasons;

    It is not easy for a human being to change his/her ways of life; mentality, habits, and common practices.
    If the above can be said to be difficult for an individual, then it seems almost an impossible task to call for the entire society to change.
    People cannot begin to change unless they are mentally convinced on the need to, and feel socially secured to act in the right direction, for if there is any iota of fear that they are alone in that regard and that the usual way still remains the norm for others, they will not want to discipline themselves and be at an advantage for the next-door neighbor who will exploit his own discipline.
    Social revolution must be far-reaching and widespread, and thus requires a highly rigorous, resilient, and mountainous effort to spread the message far and wide.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>{/* End Frequently Asked Questions Section */}

        </div>
    )
}
