
/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves map information for a given location.
 * Currently returns a static URL pointing to Madrid on Google Maps.
 *
 * @param location The location for which to retrieve map data (currently unused).
 * @returns A promise that resolves to a static URL of Madrid on Google Maps.
 */
export async function getMapUrl(location: Location): Promise<string> {
  // TODO: Implement this by calling a real Geocoding/Maps API if needed.
  // For now, we return a static URL for Madrid.
  console.log("Requested map for location (unused):", location); // Log the requested location
  // Static URL for Madrid, Spain on Google Maps
  return 'https://www.google.com/maps/search/?api=1&query=Madrid%2C+Spain';
}
