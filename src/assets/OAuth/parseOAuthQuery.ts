interface OAuthQueryParseResult {
  [propName: string]: unknown;
}

export const parseOAuthQuery = (search: string): OAuthQueryParseResult => {
  const searchParams: URLSearchParams = new URLSearchParams(search);
  const params: OAuthQueryParseResult = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  
  return { ...params };
};
