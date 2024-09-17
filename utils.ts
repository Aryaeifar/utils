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

// reach input length and jump next index

export function focusNextInput(event) {
  const input = event.target;
  const maxLength = input.getAttribute("maxlength");

  if (input.value.length >= maxLength) {
    const form = input.form;
    if (!form) return;

    const inputs = Array.from(form.querySelectorAll("input"));
    const currentIndex = inputs.indexOf(input);

    if (currentIndex >= 0 && currentIndex < inputs.length - 1) {
      const nextInput = inputs[currentIndex + 1];
      nextInput.focus();
    }
  }
}