import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Button, Header, Container } from "semantic-ui-react";
import Social from './Social' // Github and LinkedIn Links

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Container textAlign='center'>
        <Segment /* Single inline CSS USED */ raised style={{margin: "15% 37% 5%", padding: "4% 4.1%", borderRadius: "8px" }}>
            <Grid columns={2}>
                    <Container textAlign="center">
                        <Header as='h4'>Count</Header>
                        <Header as='h1'>{count}</Header>
                    </Container>
                <Grid.Row>
                    <Button
                    positive
                    onClick={() => setCount(count + 1)}
                    content="Increment" // Increment Button
                    />
                    <Button
                    negative
                    disabled={count === 0}
                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    content="Decrement" // Decrement Button
                    />
                </Grid.Row>
            </Grid>
        </Segment>
        <Header as={"h5"} onMouseOver={Social}>Done By Prashant Kumar - 12014798</Header>
    </Container>
  );
}
export default Counter;


/*----------------------------------------------------------------------------------------------

# Run this Project live: 

Exact assignment using custom css, useState and semantic-ui-react.
> GitHub: https://github.com/03prashantpk/pepassignment-two-CounterApp  <--- Visit the link
> Live: https://pepassignment-two-counterapp.onrender.com/   <--- Visit the link
> click CTRL + Mouse Click to follow the link

------------------------------------------------------------------------------------------------*/