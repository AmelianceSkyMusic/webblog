'use client';

import { useEffect } from 'react';

import { Title } from '@mantine/core';

import { FooterLayout } from '~components/FooterLayout/FooterLayout';
import { HeaderLayout } from '~components/HeaderLayout/HeaderLayout';
import { NavbarLayout } from '~components/NavbarLayout/NavbarLayout';

import { ProductCardsGrid } from './ProductCardsGrid';
import { useShopsState } from '~store/useShopsState';
import Loading from './loading';
import { shallow } from 'zustand/shallow';
import { useShopProductsState } from '~store/useShopProductsState';

//! WAIT UNTIL MANTINE V7 RELEASED
//! WAIT UNTIL MANTINE V7 RELEASED
//! WAIT UNTIL MANTINE V7 RELEASED
//! WAIT UNTIL MANTINE V7 RELEASED
//! WAIT UNTIL MANTINE V7 RELEASED

export default function Home() {
	const { allShops, currentShopId, loadingShops, getAllShops } = useShopsState(
		(state) => ({
			allShops: state.allShops,
			currentShopId: state.currentShopId,
			loadingShops: state.loading,
			getAllShops: state.getAllShops,
		}),
		shallow
	);

	const { getAllProducts, loadingProducts } = useShopProductsState(
		(state) => ({
			getAllProducts: state.getAllProducts,
			loadingProducts: state.loading,
		}),
		shallow
	);

	useEffect(() => {
		getAllProducts();
		if (!allShops) getAllShops();
	}, []);

	if (loadingShops && loadingProducts) return <Loading />;

	return (
		// <AppShell
		// 	header={<HeaderLayout />}
		// 	footer={<FooterLayout />}
		// 	navbar={<NavbarLayout />}
		// >
		<main>
			<Title order={3} pb="lg">
				{(allShops && allShops[currentShopId].name) || ''}
			</Title>
			<ProductCardsGrid />
		</main>
		// </AppShell>
	);
}
