/**
 *  Simple regular cell in a raster
 */
export default class Cell {

    /**
     * A simple cell with value and size
     * @param {L.LatLng} center
     * @param {Number} value
     * @param {Number} size
     */
    constructor(center, value, size) {
        this.center = center;
        this.value = value;
        this.size = size;
    }

    equals(anotherCell) {
        return (this.center.equals(anotherCell.center) &&
            this.value === anotherCell.value &&
            this.size === anotherCell.size
        );
    }

    /**
     * Bounds for the cell
     * @returns {LatLngBounds}
     */
    getBounds() {
        let half = this.size / 2.0;
        let cLat = this.center.lat;
        let cLng = this.center.lng;
        let ul = L.latLng([cLat + half, cLng - half]);
        let lr = L.latLng([cLat - half, cLng + half]);

        return L.latLngBounds(L.latLng(lr.lat, ul.lng), L.latLng(ul.lat, lr.lng));
    }
}
