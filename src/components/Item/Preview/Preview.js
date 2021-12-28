import React, { useState } from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import { NavLink, useLocation } from "react-router-dom";
//import UkeImg from "../../../img/uke_les_paul.jpg";
//<h1>{props.greeting}</h1>

const Preview = (props) => {
  let location = useLocation();

  return (
    <div className="Preview">
      {/* aca va el contador  */}
      <Card>
        <Card.Content>
          <Image floated="right" size="normal" src={props.img} />
          <Card.Header>{props.header}</Card.Header>
        </Card.Content>

        <Card.Content extra>
          <div>
            <NavLink
              to={`${location.pathname}/${props.id}`}
              innerRef={props.id}
            >
              <Button size="massive" animated="fade">
                <Button.Content visible>Ir al detalle</Button.Content>
                <Button.Content hidden>
                  {" "}
                  <Icon name="clipboard outline" />
                </Button.Content>
              </Button>
            </NavLink>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Preview;
