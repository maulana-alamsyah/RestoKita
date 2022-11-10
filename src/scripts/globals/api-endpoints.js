import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  IMAGE_SMALL: (id) => `${CONFIG.BASE_IMAGE_URL}/small/${id}`,
  IMAGE_MEDIUM: (id) => `${CONFIG.BASE_IMAGE_URL}/medium/${id}`,
  IMAGE_LARGE: (id) => `${CONFIG.BASE_IMAGE_URL}/large/${id}`,
};

export default API_ENDPOINT;
