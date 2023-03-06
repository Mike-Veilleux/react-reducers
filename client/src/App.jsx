import { Container, TextField, Typography, Stack, Button } from "@mui/material";
import usePerson from "./reducers/personReducer";

function App() {
  const person = usePerson();

  const prefix = "Mr.";

  return (
    <Container>
      <Stack>
        <TextField
          value={person.state.name}
          onChange={(e) => {
            person.changePersonName(e, prefix);
          }}
        />
        <TextField value={person.state.age} onChange={person.changePersonAge} />
        <Typography>{`${person.state.name} is ${person.state.age} years old and is currently coding ${person.state.isTyping}`}</Typography>
      </Stack>
    </Container>
  );
}

export default App;
