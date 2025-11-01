const stores = [
  // Gauteng
  {name:"Studio 88 Sandton City", province:"Gauteng", mapsUrl:"https://www.google.com/maps?q=-26.1076,28.0567"},
  {name:"Studio 88 Mall of Africa", province:"Gauteng", mapsUrl:"https://www.google.com/maps?q=-25.9986,28.1097"},
  {name:"Studio 88 Eastgate Mall", province:"Gauteng", mapsUrl:"https://www.google.com/maps?q=-26.1771,28.1183"},
  {name:"Studio 88 Menlyn Park", province:"Gauteng", mapsUrl:"https://www.google.com/maps?q=-25.7805,28.2768"},
  {name:"Studio 88 Westgate Mall", province:"Gauteng", mapsUrl:"https://www.google.com/maps?q=-26.1442,27.8747"},
  // KwaZulu-Natal
  {name:"Studio 88 Gateway", province:"KwaZulu-Natal", mapsUrl:"https://www.google.com/maps?q=-29.7265,31.0679"},
  {name:"Studio 88 Pavilion Mall", province:"KwaZulu-Natal", mapsUrl:"https://www.google.com/maps?q=-29.8531,30.9180"},
  {name:"Studio 88 Galleria Mall", province:"KwaZulu-Natal", mapsUrl:"https://www.google.com/maps?q=-30.0413,30.8903"},
  {name:"Studio 88 Midlands Mall", province:"KwaZulu-Natal", mapsUrl:"https://www.google.com/maps?q=-29.5946,30.3794"},
  {name:"Studio 88 Richards Bay Boardwalk", province:"KwaZulu-Natal", mapsUrl:"https://www.google.com/maps?q=-28.7830,32.0383"},
  // Western Cape
  {name:"Studio 88 Canal Walk", province:"Western Cape", mapsUrl:"https://www.google.com/maps?q=-33.8920,18.5112"},
  {name:"Studio 88 V&A Waterfront", province:"Western Cape", mapsUrl:"https://www.google.com/maps?q=-33.9066,18.4206"},
  {name:"Studio 88 Cavendish Square", province:"Western Cape", mapsUrl:"https://www.google.com/maps?q=-33.9806,18.4654"},
  {name:"Studio 88 Tyger Valley", province:"Western Cape", mapsUrl:"https://www.google.com/maps?q=-33.8750,18.6333"},
  {name:"Studio 88 Somerset Mall", province:"Western Cape", mapsUrl:"https://www.google.com/maps?q=-34.0763,18.8210"},
  // Eastern Cape
  {name:"Studio 88 Walmer Park", province:"Eastern Cape", mapsUrl:"https://www.google.com/maps?q=-33.9814,25.5505"},
  {name:"Studio 88 Greenacres Mall", province:"Eastern Cape", mapsUrl:"https://www.google.com/maps?q=-33.9434,25.5851"},
  {name:"Studio 88 Hemingways Mall", province:"Eastern Cape", mapsUrl:"https://www.google.com/maps?q=-32.9713,27.9186"},
  {name:"Studio 88 Vincent Park", province:"Eastern Cape", mapsUrl:"https://www.google.com/maps?q=-32.9760,27.9181"},
  {name:"Studio 88 Mthatha Plaza", province:"Eastern Cape", mapsUrl:"https://www.google.com/maps?q=-31.5889,28.7917"},
  // Free State
  {name:"Studio 88 Loch Logan Waterfront", province:"Free State", mapsUrl:"https://www.google.com/maps?q=-29.1164,26.2150"},
  {name:"Studio 88 Mimosa Mall", province:"Free State", mapsUrl:"https://www.google.com/maps?q=-29.1169,26.2157"},
  {name:"Studio 88 Kroonstad Central", province:"Free State", mapsUrl:"https://www.google.com/maps?q=-27.6500,27.2333"},
  {name:"Studio 88 Welkom Goldfields Mall", province:"Free State", mapsUrl:"https://www.google.com/maps?q=-27.9775,26.7351"},
  {name:"Studio 88 Bethlehem Dihlabeng Mall", province:"Free State", mapsUrl:"https://www.google.com/maps?q=-28.2333,28.3167"},
  // Limpopo
  {name:"Studio 88 Mall of the North", province:"Limpopo", mapsUrl:"https://www.google.com/maps?q=-23.8938,29.4486"},
  {name:"Studio 88 Thavhani Mall", province:"Limpopo", mapsUrl:"https://www.google.com/maps?q=-22.9500,30.4833"},
  {name:"Studio 88 Makhado Crossing", province:"Limpopo", mapsUrl:"https://www.google.com/maps?q=-23.0500,29.9000"},
  {name:"Studio 88 Tzaneen Mall", province:"Limpopo", mapsUrl:"https://www.google.com/maps?q=-23.8333,30.1667"},
  {name:"Studio 88 Modimolle Central", province:"Limpopo", mapsUrl:"https://www.google.com/maps?q=-24.7000,28.4000"},
  // Mpumalanga
  {name:"Studio 88 Riverside Mall", province:"Mpumalanga", mapsUrl:"https://www.google.com/maps?q=-25.4750,30.9570"},
  {name:"Studio 88 Ilanga Mall", province:"Mpumalanga", mapsUrl:"https://www.google.com/maps?q=-25.4700,30.9700"},
  {name:"Studio 88 Highveld Mall", province:"Mpumalanga", mapsUrl:"https://www.google.com/maps?q=-25.8700,29.2333"},
  {name:"Studio 88 Secunda Mall", province:"Mpumalanga", mapsUrl:"https://www.google.com/maps?q=-26.5500,29.1667"},
  {name:"Studio 88 Middelburg Mall", province:"Mpumalanga", mapsUrl:"https://www.google.com/maps?q=-25.7667,29.4667"},
  // Northern Cape
  {name:"Studio 88 North Cape Mall", province:"Northern Cape", mapsUrl:"https://www.google.com/maps?q=-28.7282,24.7499"},
  {name:"Studio 88 Kimberley CBD", province:"Northern Cape", mapsUrl:"https://www.google.com/maps?q=-28.7380,24.7590"},
  {name:"Studio 88 Kathu Mall", province:"Northern Cape", mapsUrl:"https://www.google.com/maps?q=-27.6950,23.0490"},
  {name:"Studio 88 Upington Kalahari Mall", province:"Northern Cape", mapsUrl:"https://www.google.com/maps?q=-28.4556,21.2420"},
  {name:"Studio 88 Kuruman Mall", province:"Northern Cape", mapsUrl:"https://www.google.com/maps?q=-27.4520,23.4320"},
  // North West
  {name:"Studio 88 Waterfall Mall", province:"North West", mapsUrl:"https://www.google.com/maps?q=-25.6742,27.2425"},
  {name:"Studio 88 MooiRivier Mall", province:"North West", mapsUrl:"https://www.google.com/maps?q=-26.7150,27.0990"},
  {name:"Studio 88 Mafikeng Mall", province:"North West", mapsUrl:"https://www.google.com/maps?q=-25.8650,25.6440"},
  {name:"Studio 88 Brits Mall", province:"North West", mapsUrl:"https://www.google.com/maps?q=-25.6330,27.7810"},
  {name:"Studio 88 Klerksdorp City Mall", province:"North West", mapsUrl:"https://www.google.com/maps?q=-26.8690,26.6660"}
];

