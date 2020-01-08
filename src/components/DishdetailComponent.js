import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

 class DishdetailComponent extends Component {
     constructor(props){
         super(props);

         this.state = {
             comments: [

                 { 
                    id:0,
                    c: 'Imagine,All the eatables in confusion'
                  }
                 ]

         }
     }
    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardBody>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )

        }
        else {
            return(<div>

            </div>)
        }
    }
    render() {
        const com = this.state.comments.map((comment) => {
            return (
              <div key={comment.id} className="list-unstyled col-12 col-md-5">
                
                <li>{comment.c}</li>
                  
              </div>
            );
        });


        return (
            <div className="container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
                
            </div>
             <div className="col-12 col-md-5 m-1">
                 <div className="font-weight-bold">
                 <h4>
                 Comments
                     </h4>
                 </div>
                 
               {com}
            </div>
            </div>
            </div>
        )
    }
}


export default DishdetailComponent;