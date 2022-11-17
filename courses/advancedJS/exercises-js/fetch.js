/***
 * Supongamos que tenemos una request y queremos cancelarla si la misma tarda mas mas de 2 segundos.
 **/

// aca tenemos el fetch comun y corriente
const url =
	'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
let imgUrl;

const respose = await fetch(url);
const blob = await respose.blob();
imgUrl = URL.createObjectURL(blob);

const controller = new AbortController();

// 2. lo que vamos a hacer es un timmer, que si en 2 segundos no se resolvio la imgUrl cancelamos el fetch

setTimeout(() => {
	if (!imgUrl) controller.abort();
}, 2000);

//3. ahora debemos pasarle al fetch el method signal como option
const respose2 = await fetch(url, { signal: controller.signal });
const blob2 = await respose2.blob();
imgUrl = URL.createObjectURL(blob2);
