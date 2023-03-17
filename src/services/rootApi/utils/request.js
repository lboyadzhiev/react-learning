export const request = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (response.ok === false) {
      const error = await response.json();

      throw new Error(error.message);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
