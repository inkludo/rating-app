import { Htag, Tag, HhData } from '../../components';
import { PageComponentProps } from './PageComponent.props';
import styles from './PageComponent.module.css';
import { LevelCategory } from '../../interfaces/page.interface';

export const PageComponent = ({ page, products, firstCategory }: PageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Sorting</span>
			</div>
			<div>
				{products && products.map(product => <div key={product._id}>{product.title}</div>)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Vacancies – {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			<div className={styles.hh}>
				{firstCategory == LevelCategory.Courses && page.hh && <HhData {...page.hh} />}
			</div>
		</div>
	);
};