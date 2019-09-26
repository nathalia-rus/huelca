const getHuelDataApi = (data: string): any => {
  return fetch(`http://localhost:3000/${data}`).then(response =>
    response.json()
  );
};

export { getHuelDataApi };
