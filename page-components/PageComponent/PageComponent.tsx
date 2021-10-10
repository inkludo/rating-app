import { Htag, Tag, HhData, Advantages } from '../../components';
import { PageComponentProps } from './PageComponent.props';
import { LevelCategory } from '../../interfaces/page.interface';
import parse from 'html-react-parser';
import styles from './PageComponent.module.css';

export const PageComponent = ({ page, products, firstCategory }: PageComponentProps): JSX.Element => {
	return (
		<div>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Sorting</span>
			</div>
			<div>
				{products && products.map(product => <div key={product._id}>{product.title}</div>)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии – {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			<div className={styles.hh}>
				{firstCategory == LevelCategory.Courses && page.hh && <HhData {...page.hh} />}
				{page.advantages && page.advantages.length > 1 && <>
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