import React from 'react'
// import { Button, Jumbotron } from 'react-bootstrap';
import Corousal from './corousal';
import About from './About';
import CallToAction from './CallToAction';
import WhyBlackRev from './WhyBlackRev'
import Counter from './Counter'
import JoinDivider from './JoinDivider';
import JoinAndVolunteer from './JoinAndVolunteer';
import Faq from './Faq'
import AimandobjDivider from './aimandobjDivider';
import SmButtonJoinAndBook from './smButtonJoinAndBook';

export default function SliderTop() {
    return (
        <div>
     
<Corousal/>
<SmButtonJoinAndBook/>
<About/>
<CallToAction/>
<WhyBlackRev/>
<JoinDivider/>
<Counter/>
<JoinAndVolunteer/>
<AimandobjDivider/>
<Faq/>
        </div>
    )
}
