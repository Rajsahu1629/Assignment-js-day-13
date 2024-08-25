// Volume class definition
class Volume {
    constructor(name, writer, publicationYear, category) {
        this.name = name;
        this.writer = writer;
        this.publicationYear = publicationYear;
        this.category = category;
    }

    getDetails() {
        return `${this.name} by ${this.writer}, published in ${this.publicationYear}. Category: ${this.category}`;
    }
}

// Collection class definition
class Collection {
    constructor() {
        this.volumes = [];
    }

    addVolume(volume) {
        if (volume instanceof Volume) {
            this.volumes.push(volume);
        } else {
            console.error('Invalid volume');
        }
    }

    filterVolumesByYear(year) {
        return this.volumes.filter(volume => volume.publicationYear > year);
    }

    getAllNames() {
        return this.volumes.map(volume => volume.name);
    }

    getTotalVolumes() {
        return this.volumes.reduce((total) => total + 1, 0);
    }

    getAveragePublicationYear() {
        const totalYears = this.volumes.reduce((sum, volume) => sum + volume.publicationYear, 0);
        return this.volumes.length ? totalYears / this.volumes.length : 0;
    }
}

// Factory function to create a new volume
function createVolume(name, writer, publicationYear, category) {
    return new Volume(name, writer, publicationYear, category);
}

// Example usage
const myCollection = new Collection();

const volume1 = createVolume('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction');
const volume2 = createVolume('1984', 'George Orwell', 1949, 'Dystopian');
const volume3 = createVolume('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction');
const volume4 = createVolume('Brave New World', 'Aldous Huxley', 1932, 'Dystopian');

myCollection.addVolume(volume1);
myCollection.addVolume(volume2);
myCollection.addVolume(volume3);
myCollection.addVolume(volume4);

console.log('Volumes published after 1930:', myCollection.filterVolumesByYear(1930));
console.log('All volume names:', myCollection.getAllNames());
console.log('Total number of volumes:', myCollection.getTotalVolumes());
console.log('Average publication year:', myCollection.getAveragePublicationYear());
