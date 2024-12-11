/**
 * Represents a basic component.
 */
class Component {
    constructor(spec, normParams) {
        this.spec = spec;
        this.normParams = normParams;
    }

    /**
     * Maps a layer or unit based on specifications and parameters.
     * 
     * @param {Object} spec - The specification object.
     * @param {Object} normParams - Normalized parameters.
     * @returns {string} Description of the mapped layer or unit.
     */
    mapLayerOrUnit(spec, normParams) {
        // Placeholder implementation
        return `Mapping with ${spec.name} and ${normParams.type}`;
    }
}

/**
 * @classdesc This class represents a specialized component.
 * It extends the `Component` class to provide additional functionality.
 *
 * @extends Component
 */
class SpecializedComponent extends Component {
    constructor(spec, normParams) {
        super(spec, normParams);
    }

    /**
     * Override the `mapLayerOrUnit` method to provide additional functionality.
     * 
     * @param {Object} spec - The specification object.
     * @param {Object} normParams - Normalized parameters.
     * @returns {string} Description of the mapped layer or unit.
     */
    mapLayerOrUnit(spec, normParams) {
        const baseResult = super.mapLayerOrUnit(spec, normParams);
        // Additional logic specific to SpecializedComponent
        return `${baseResult} with extra processing in SpecializedComponent`;
    }
}

// Usage example
const spec = { name: 'Layer1' };
const normParams = { type: 'TypeA' };

const specialComponent = new SpecializedComponent(spec, normParams);
console.log(specialComponent.mapLayerOrUnit(spec, normParams));
