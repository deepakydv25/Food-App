export function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}
