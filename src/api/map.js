import apiConfig from './apiConfig';

export default {
    async getLocations() {
        const response = await fetch(apiConfig.baseURL+'/marker/');
        return response.json();
    }
}
