import React, { Component } from 'react';
// import { Col, Card, Card.Body, Card.Header, MDBRow, ListGroup, ListGroup.Item, Badge} from 'mdbreact';
import {Col, Card ,Row ,ListGroup,Badge} from 'react-bootstrap'
import { Bar, Pie } from 'react-chartjs-2';
import {
   
    allUsers, allMaleUsers, allFemaleUsers
} from '../../../component/apidata/api'

class ChartSection1 extends Component {
    constructor() {
        super()
        this.state = {
          
            allusers: [],
            allmaleusers:[],
            allfemaleusers:[]
            
        }
    }

    async componentWillMount() {
        

        const allusers = await allUsers()
        const allmaleusers = await allMaleUsers()
        const allfemaleusers = await allFemaleUsers()

        
 
        this.setState({
            allusers: allusers.length,
            allmaleusers:allmaleusers.length,
            allfemaleusers: allfemaleusers.length
        })
      
    }

    render(){
        const {
          
            allusers,
            allfemaleusers,
            allmaleusers
            
        } = this.state
        const dataBar = {
            labels: ['male, female and users'],
            datasets: [
            {
                label: 'male',
                data: [allmaleusers],
                backgroundColor: 'rgba(245, 74, 85, 0.5)',
                borderWidth: 1
            }, {
                label: 'female',
                data: [allfemaleusers],
                backgroundColor: 'rgba(90, 173, 246, 0.5)',
                borderWidth: 1
            }, {
                label: 'users',
                data: [allusers],
                backgroundColor: 'rgba(245, 192, 50, 0.5)',
                borderWidth: 1
            }
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [{
                barPercentage: 1,
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }

        const dataPie = {
            labels: ['male', 'female', ],
            datasets: [
            {
                data: [allmaleusers, allfemaleusers ],
                backgroundColor: ['#F7464A', '#46BFBD'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1']
            }
            ]
        }
        return (
            <Row className="mb-4">
                <Col md="8"className="mb-4">
                    <Card className="mb-4">
                        <Card.Body>
                            <Bar data={dataBar} height={500} options={barChartOptions} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4" className="mb-4">
                    <Card className="mb-4">
                        <Card.Header>Pie chart</Card.Header>
                        <Card.Body>
                            <Pie data={dataPie} height={300} options={{responsive: true}} />
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                               
                               
                                <ListGroup.Item>
                                    all user
                                    < Badge variant = "secondary"
                                    pill className = "float-right" >
                                         {allusers}
                                    </Badge>
                                </ListGroup.Item>
                                 <ListGroup.Item>
                                    all male
                                    < Badge variant = "primary"
                                    pill className = "float-right" >
                                         {
                                             allmaleusers
                                         }
                                    </Badge>
                                </ListGroup.Item>
                                 <ListGroup.Item>
                                    all female
                                    < Badge 

                                    variant = "secondary"
                                     pill className = "float-right" >
                                        {allfemaleusers}
                                    </Badge>
                                </ListGroup.Item>
                                
                                
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default ChartSection1;

