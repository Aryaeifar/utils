
// restrict input to number
export function restrictToNumber(val: string) {
  return val.replace(/\D/g, "");
}

// Click to address mapboxGL
export function handleMapClick(lnglat: any, token: string) {
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lnglat.lng},${lnglat.lat}.json?access_token=${token}`
  )
    .then((response) => response.json())
    .then((data) => {
      const address = data.features[0].place_name;
      console.log(address);
    })
    .catch((error) => {
      console.error("Error fetching address:", error);
    });
}

// Number format 3 digits
export function numberFormat(money: any) {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

// Sum loop numbers
export function calculateSum(items: any) {
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


import moment from "moment-jalaali";

/**
 * Convert Jalali date to Gregorian UTC with date and time.
 * @param {string} jalaliDate - The Jalali date string (format: jYYYY/jMM/jDD HH:mm).
 * @returns {string} - The UTC Gregorian date string in ISO format.
 */
export function jalaliToGregorianUTC(jalaliDate: string): string {
  // Convert Jalali to Gregorian and then to UTC
  const gregorianDate: Date = moment(
    jalaliDate,
    "jYYYY/jMM/jDD HH:mm"
  ).toDate();
  return moment(gregorianDate).utc().toISOString(); // Convert to UTC with date and time
}

/**
 * Convert Gregorian UTC date to Jalali (only date, no time).
 * @param {string} utcGregorianDate - The UTC Gregorian date string (format: YYYY-MM-DDTHH:mm:ssZ).
 * @returns {string} - The Jalali date string (format: jYYYY/jMM/jDD).
 */
export function gregorianUTCToJalali(utcGregorianDate: string): string {
  // Convert UTC Gregorian to Jalali
  const jalaliDate: string = moment(utcGregorianDate).format("jYYYY/jMM/jDD");
  return jalaliDate; // Return Jalali date only (without time)
}
