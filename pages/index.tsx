import { useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>SomeText</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Click me</Button>
      <Ptag size='m'>Hello I'm a p tag!</Ptag>
      <Tag size='m' color='red' href='udemy.com'>Click</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
