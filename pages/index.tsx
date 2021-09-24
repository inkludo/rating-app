import { Button, Htag, Ptag, Tag } from '../components';


export default function Home(): JSX.Element {

  return (
    <>
      <Htag tag='h1'>SomeText</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Click me</Button>
      <Ptag size='m'>Hello I'm a p tag!</Ptag>
      <Tag size='m' color='red' href='udemy.com'>Click</Tag>
    </>
  );
}
