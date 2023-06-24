export const getGuestNameFromQueryParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get("guest") || "";
};

export const isInvitationOpened = () => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get("opened") === "1";
};
