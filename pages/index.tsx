import { Button, Htag } from '../components';


export default function Home(): JSX.Element {

  return (
    <>
      <Htag tag='h1'>SomeText</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Click me</Button>

    </>
  );
}
