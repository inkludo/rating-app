import { Htag, Tag, HhData, Advantages, Sort, Product } from '../../components';
import { PageComponentProps } from './PageComponent.props';
import { LevelCategory } from '../../interfaces/page.interface';
import parse from 'html-react-parser';
import styles from './PageComponent.module.css';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const PageComponent = ({ page, products, firstCategory }: PageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	useEffect(() => {
		dispatchSort({ type: 'reset', initialState: products });
	}, [products]);

	return (
		<div>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts && sortedProducts.map(product => <Product layout key={product._id} product={product} />)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии – {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			<div className={styles.hh}>
				{firstCategory == LevelCategory.Courses && page.hh && <HhData {...page.hh} />}
				{page.advantages && page.advantages.length > 0 && <>
					<Htag tag='h2'>Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>
				}
				{page.seoText && <div className={styles.seo}>{parse(page.seoText)}</div>}
				<Htag tag='h2'>Получаемые навыки</Htag>
				{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
			</div>
		</div>
	);
};