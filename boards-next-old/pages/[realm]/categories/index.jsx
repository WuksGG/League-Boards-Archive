import Head from 'next/head';

import styles from './categories.module.css';

import CategoryTile from '../../../components/categories/tile';
import { getCategories } from '../../../models/categories';

export default function CategoriesPage(props) {
  return (
    <div className={styles.outer}>
      <h2>Categories</h2>
      <div className={styles.container}>
        {props.categories.map((category) => {
          return <CategoryTile data={category} key={category.id} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const test = await getCategories(context.params.realm);
  return {
    props: {
      pageTitle: context.params.realm.toUpperCase() + ' Categories',
      categories: test.rows,
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { realm: 'na' } },
      { params: { realm: 'eu' } }
    ],
    fallback: false,
  }
}