import React from 'react'
import { Link } from 'gatsby'

import paginationStyles from './pagination.module.scss'

const PaginationLinks = ({currentPage, numberOfPages}) => {
	const isFirst = currentPage === 1 // variabel untuk menguji apakah ini adalah halaman pertama, berfungsi untuk membuat logic pagination next, prev
	const isLast = currentPage === numberOfPages // variabel untuk menguji apakah ini adalah halaman terakhir, berfungsi untuk membuat logic pagination next, prev
	const previousPage = currentPage - 1 === 1 ? '/blog' : '/page/' + (currentPage - 1).toString() // variabel untuk membuat logic apakah kita bisa melakukan pagination secara previous(berpindah ke halaman sebelumya)
	const nextPage = '/blog/page/' + (currentPage + 1).toString() // variabel untuk membuat logic apakah kita bisa melakukan pagination secara next(berpindah ke halaman selanjutnya)

	return (
		<div aria-label="Page navigation example" className={paginationStyles.body}>
			{Array.from({ length: numberOfPages }, (_, i) => currentPage === i + 1 ? (
				<div key={`page-number${i + 1}`}>
					<Link activeClassName={paginationStyles.activeNavItem} to={`/blog/${i === 0 ? '' : 'page/' + (i + 1)}`}>
						{i + 1}
					</Link>
				</div>								
			) : (
				<div key={`page-number${i + 1}`}>
					<Link activeClassName={paginationStyles.activeNavItem} to={`/blog/${i === 0 ? '' : 'page/' + (i + 1)}`}>
						{i + 1}
					</Link>
				</div>										
			))}
		</div>
	)
}

export default PaginationLinks