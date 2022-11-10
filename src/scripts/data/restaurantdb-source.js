import API_ENDPOINT from '../globals/api-endpoints';

class RestauranDBSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const reseponseJSON = await response.json();
    return reseponseJSON.restaurant;
  }
}

export default RestauranDBSource;
