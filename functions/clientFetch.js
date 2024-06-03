async function postJSON(data) {
  try {
    const response = await fetch(
      'http://localhost:3000/api/create-tips-from-json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }
    );

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

const strJson = `
{
  "tips": [
    {
      "title": "No olvides tu ahorro de emergencia",
      "description": "Recuerda tener siempre un ahorro que pueda ayudarte a cubrir alguna emergencia. De tu gasto mensual, destina un porcentaje para este ahorro.",
      "category": "ahorro",
      "author": "Teresa González"
    },
    {
      "title": "Crea metas financieras para tu vivienda",
      "description": "Para tener mayor claridad e incentivo a la ahora de ahorrar para tu vivienda, establece metas claras y gestiona tus gastos para alcanzarlas.",
      "category": "vivienda",
      "author": "Teresa González"
    },
    {
      "title": "Evita los gastos hormiga",
      "description": "Ten cuidado con esos pequeños gastos que pueden significar un porcentaje importante de nuestro presupuesto a fin de mes.",
      "category": "ahorro",
      "author": "Teresa González"
    },
    {
      "title": "Título del tip",
      "description": "Bla bla bla",
      "category": "prevision",
      "author": "Nombre de quien lo escribe"
    }
  ]
}
  `;

const jsonObj = JSON.parse(strJson);
const data = JSON.stringify(jsonObj);
postJSON(data);
