
export default {
    async getLocations() {
        const response = await fetch('locations.json');
        return response.json();
    }
}
