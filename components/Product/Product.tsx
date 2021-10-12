import { ProductProps } from './Product.props';
import { Divider, Button, Tag, Rating, Card } from '..';
import { declOfNum, priceUSD } from '../../helpers/helpers';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Product.module.css';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

	return (
		<Card className={styles.product} >
			<div className={styles.logo}>
				<Image
					src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
					alt={product.title}
					width={70}
					height={70}
				/>
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{priceUSD(product.price)}
				{product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceUSD(product.price - product.oldPrice)}</Tag>}
			</div>
			<div className={styles.credit}>
				{priceUSD(product.credit)}/<span className={styles.month}>мес</span>
			</div>
			<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
			<div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
			<div className={styles.priceTitle}>цена</div>
			<div className={styles.creditTitle}>кредит</div>
			<div className={styles.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
			<Divider className={styles.hr} />
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>
				{product.characteristics.map(c => (
					<div className={styles.characteristics} key={c.name}>
						<span className={styles.characteristicsName}>{c.name}</span>
						<span className={styles.characteristicsDots}></span>
						<span className={styles.characteristicsValue}>{c.value}</span>
					</div>
				))}
			</div>
			<div className={styles.advBlock}>
				{product.advantages && <div className={styles.advantages}>
					<div className={styles.advTitle}>Преимущества</div>
					<div>{product.advantages}</div>
				</div>}
				{product.disAdvantages && <div className={styles.disadvantages}>
					<div className={styles.advTitle}>Недостатки</div>
					<div>{product.disAdvantages}</div>
				</div>}
			</div>
			<Divider className={cn(styles.hr, styles.hr2)} />
			<div className={styles.actions}>
				<Button appearance='primary'>Узнать подробнее</Button>
				<Button appearance='ghost' arrow={'right'} className={styles.reviewButton}>Читать отзывы</Button>
			</div>
		</Card>
	);
};