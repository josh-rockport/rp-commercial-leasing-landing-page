export const getHeadlineFromURL = (): string => {
  const params = new URLSearchParams(window.location.search);
  const headline = params.get('headline');
  
  if (headline) {
    return decodeURIComponent(headline).toUpperCase();
  }
  
  return 'COMMERCIAL SPACE';
};

export const getSubheadlineFromURL = (): string => {
  const params = new URLSearchParams(window.location.search);
  const subheadline = params.get('subheadline');
  
  if (subheadline) {
    return decodeURIComponent(subheadline);
  }
  
  return 'Find your ideal space in our premium industrial park';
};

export const getAllURLParams = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const paramsObject: Record<string, string> = {};
  
  params.forEach((value, key) => {
    paramsObject[key] = value;
  });
  
  return paramsObject;
};
