export const getGuestNameFromQueryParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get("guest") || "";
};
