import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag='h1'>SomeText</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Click me</Button>
      <Ptag size='m'>Hello I'm a p tag!</Ptag>
      <Tag size='m' color='red' href='udemy.com'>Click</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='test' />
      <Textarea placeholder='textarea' />
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.page.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
