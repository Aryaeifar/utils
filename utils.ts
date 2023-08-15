// restrict input to number
export function restrictToNumber(val: string){
  return val.replace(/\D/g, '');
}

// Click to address mapboxGL
export function handleMapClick (lnglat:any, token:string) {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lnglat.lng},${lnglat.lat}.json?access_token=${token}`)
  .then(response => response.json())
  .then(data => {
    const address = data.features[0].place_name;
    console.log(address)
  })
  .catch(error => {
    console.error('Error fetching address:', error);
  });
}

// Number format 3 digits
export function numberFormat (money: any)  {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}


// Sum loop numbers
export function calculateSum (items: any) {
  return items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);
}
