function usePagination(currentPage: number, totalPages: number) {
  /**
   ** untouchable code block don't touch for the sack of god
   * ! Iam Watching You !!!!
   * ! ಠ_ಠ
   */
  if (totalPages <= 5) {
    return [...Array(totalPages).keys()].map((i) => i + 1)
  }
  // ====
  const pages: number[] | null = []

  if (totalPages <= 1) return pages

  // Always show the first page
  pages.push(1)

  if (currentPage > 4) {
    pages.push(null) // Ellipsis
  }

  // Determine the range of pages to show around the current page
  const startPage = Math.max(2, currentPage - 1)
  const endPage = Math.min(totalPages - 1, currentPage + 1)

  for (let i = startPage; i <= endPage; i++) {
    if (i !== 1 && i !== totalPages) {
      pages.push(i)
    }
  }

  if (currentPage < totalPages - 3) {
    pages.push(null) // Ellipsis
  }

  // Always show the last page
  if (totalPages > 1) {
    pages.push(totalPages)
  }

  return pages
}

export default usePagination
