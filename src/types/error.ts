export interface StarzlyError {
  message: string;
  status?: number;
}

export const mapError = (error: any): StarzlyError => {
  if (error.response && error.response.data && error.response.data.message) {
    return {
      message: error.response.data.message,
      status: error.response.status,
    };
  }
  if (error.response && error.response.status === 404) {
    return {
      message: error.response.data
        ? error.response.data.message || error.response.data
        : error.response.data.message,
      status: error.response.status,
    };
  }
  if (error.message) {
    return {message: error.message, status: undefined};
  }
  if (typeof error === 'string') {
    return {message: error, status: undefined};
  }
  return {message: 'Unknown Error.', status: undefined};
};
