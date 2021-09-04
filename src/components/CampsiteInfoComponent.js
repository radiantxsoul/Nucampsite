import react from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

    function renderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    };
    function renderComments({comments}) {
        if (comments) {
            return (
                <div className='md-5 m-1'>
                    <h4>Comments</h4>
                    {comments.map(comments => {
                        return (
                            
                                <div key={comments.Id}>
                                   <p> {comment.text}<br />                                                            
                                    {comment.author}, {new intl.DateTimeFormat("en-US", {year: "'numeric", month:"short", 
                                    day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                                </p>
                                </div>
                                                           
                        )

                    })}
                </div>                  
            );
        }
    }

    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.campsite.comments} />
                    </div>
                </div>
            );
        }
        
        return <div />
        
    }


export default Campsiteinfo;