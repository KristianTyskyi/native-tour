
export default {
    async getLocations() {
        const response = await fetch('http://127.0.0.1:8000/api/marker/');
        return response.json();
    }
}
