import { Avatar, Card, Text } from "../components/atoms";

export default function Home() {
  return (
    <Card>
      <Avatar
        round={true}
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        }
      />
      <Text align="auto" weidth="bolder" fontSize={10} keyText="test" />
    </Card>
  );
}
