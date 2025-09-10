const productos = [
  { nombre: "Camiseta Clásica", color: "Blanco", categoria: "Camisetas", precio: 30, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.XHI039L4F48u3iDSM4z7uwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Clásica", color: "Gris", categoria: "Camisetas", precio: 30, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.Ft_QRIoHpnQEnLOF5MMPNwHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Clásica", color: "Negro", categoria: "Camisetas", precio: 30, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.rhMt5vZTknvBcZX-oxwjeQHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Clásica", color: "Rojo", categoria: "Camisetas", precio: 30, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.7an_ATtIKjHA690ZhtEdagHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Clásica", color: "Verde", categoria: "Camisetas", precio: 30, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.UqVUYel2-lmow3xbZCngfwHaI4?w=177&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Clásica", color: "Azul", categoria: "Camisetas", precio: 30, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.Za2Y5micIATqo4cXH-VyxAHaKu?w=152&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Camiseta Oversize", color: "Gris", categoria: "Camisetas", precio: 40, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.P8V0WFZ_8PrvgUdC3z8A3gHaJQ?w=186&h=233&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Oversize", color: "Blanco", categoria: "Camisetas", precio: 40, estilo: "Urbano", img: "https://img01.ztat.net/article/spp-media-p1/f12f332253c9417bbddb286647807a56/f7df45924bc44da8b467e2240f2747af.jpg?imwidth=300" },
  { nombre: "Camiseta Oversize", color: "Negro", categoria: "Camisetas", precio: 40, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.NTKdsbyKKSqH3vIk1h6PuAHaJQ?w=186&h=233&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Oversize", color: "Vino", categoria: "Camisetas", precio: 40, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.A1sSSCenwi-1gO2-ZPOO2AHaJW?w=186&h=235&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Oversize", color: "Azul", categoria: "Camisetas", precio: 40, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.2G3_4WxUDer1-HFjPv2tZQAAAA?w=186&h=278&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Oversize", color: "Verde", categoria: "Camisetas", precio: 40, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.YRgAOYl3DbpcMOBj5UrdBwHaJS?w=186&h=234&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Camiseta Estampada", color: "Verde", categoria: "Camisetas", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Q7K-0j9Lupb_6jbC4mBC5QHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Estampada", color: "Blanco", categoria: "Camisetas", precio: 35, estilo: "Casual", img: "https://quest.vteximg.com.br/arquivos/ids/420334-676-676/QUE163220061-18-2.jpg?v=638143690320270000" },
  { nombre: "Camiseta Estampada", color: "Azul", categoria: "Camisetas", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Xt6hR6W6Usi3Z3N8bS2H6QHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Estampada", color: "Rojo", categoria: "Camisetas", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Kd1NhCKJa9KTuOoao2lNdwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Estampada", color: "Morado", categoria: "Camisetas", precio: 35, estilo: "Casual", img: "https://tse3.mm.bing.net/th/id/OIP.OmqVt-QJ1dHTAQrzPoA-EgHaKg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

  { nombre: "Camiseta Deportiva", color: "Negro", categoria: "Camisetas", precio: 90, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.8UHv31fr9D2O7yOxA90bFAHaLH?w=133&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Deportiva", color: "Blanco", categoria: "Camisetas", precio: 90, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.KPuOQElYo9-bUuqkn78xcwHaJL?w=168&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Deportiva", color: "Gris", categoria: "Camisetas", precio: 90, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.gNNisnmhocedNECSxUPX-gHaJQ?w=186&h=233&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Camiseta Deportiva", color: "Azul", categoria: "Camisetas", precio: 90, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.Fyska5_ANIvoiCiy_Ru4DwHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  // PANTALONES
  { nombre: "Pantalón Baggy", color: "Azul", categoria: "Pantalones", precio: 55, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.tBvD0KvC17enLZ24_h3XhwHaJ3?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Baggy", color: "Blanco", categoria: "Pantalones", precio: 55, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.hH-NWP3VFR4hsIy8KJP_QgHaJf?w=186&h=239&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Baggy", color: "Tierra", categoria: "Pantalones", precio: 55, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.V79kDcqfXpvWHMXi5Pag5wHaJf?w=186&h=239&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Baggy", color: "Verde", categoria: "Pantalones", precio: 55, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.kpKpBYW9tue_eV4haPAfIgHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Baggy", color: "Negro", categoria: "Pantalones", precio: 55, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.zKEchbK5NfLulflP7UYFHAHaJQ?w=186&h=233&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Pantalón Slim", color: "Azul oscuro", categoria: "Pantalones", precio: 40, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.6FL613jko_qKXOd0oR1iCAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Slim", color: "Negro", categoria: "Pantalones", precio: 40, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.6FL613jko_qKXOd0oR1iCAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Slim", color: "Blanco", categoria: "Pantalones", precio: 40, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.6FL613jko_qKXOd0oR1iCAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Pantalón Skinny", color: "Negro", categoria: "Pantalones", precio: 35, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.ltYXMUfmBEcSWJabWORzXAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Skinny", color: "Azul Oscuro", categoria: "Pantalones", precio: 35, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.ltYXMUfmBEcSWJabWORzXAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Skinny", color: "Gris", categoria: "Pantalones", precio: 35, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.ltYXMUfmBEcSWJabWORzXAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Pantalón Jean", color: "Azul oscuro", categoria: "Pantalones", precio: 50, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.tBvD0KvC17enLZ24_h3XhwHaJ3?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Jean", color: "Negro", categoria: "Pantalones", precio: 50, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Q1nyVn47KQGiq6kWtwDSZAHaJ3?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Pantalón Jean", color: "Blanco", categoria: "Pantalones", precio: 50, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Q1nyVn47KQGiq6kWtwDSZAHaJ3?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  // ZAPATILLAS
  { nombre: "Zapatillas Nike", color: "Negro", categoria: "Zapatillas", precio: 139, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.XQlaqdmPuUrYR5NPAEbM-wHaHa?w=194&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Nike", color: "Blanco", categoria: "Zapatillas", precio: 139, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.XQlaqdmPuUrYR5NPAEbM-wHaHa?w=194&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Nike", color: "Gris", categoria: "Zapatillas", precio: 139, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.XQlaqdmPuUrYR5NPAEbM-wHaHa?w=194&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Nike", color: "Azul", categoria: "Zapatillas", precio: 139, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.XQlaqdmPuUrYR5NPAEbM-wHaHa?w=194&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Nike", color: "Verde", categoria: "Zapatillas", precio: 139, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.XQlaqdmPuUrYR5NPAEbM-wHaHa?w=194&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Nike", color: "Rojo", categoria: "Zapatillas", precio: 139, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.XQlaqdmPuUrYR5NPAEbM-wHaHa?w=194&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Zapatillas Adidas", color: "Negro", categoria: "Zapatillas", precio: 200, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.8a2i-6Wrjn8XHAEhKivl0QHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Adidas", color: "Blanco", categoria: "Zapatillas", precio: 200, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.8a2i-6Wrjn8XHAEhKivl0QHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Adidas", color: "Gris", categoria: "Zapatillas", precio: 200, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.8a2i-6Wrjn8XHAEhKivl0QHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Adidas", color: "Verde", categoria: "Zapatillas", precio: 200, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.8a2i-6Wrjn8XHAEhKivl0QHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Adidas", color: "Azul", categoria: "Zapatillas", precio: 200, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.8a2i-6Wrjn8XHAEhKivl0QHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Zapatillas Skechers", color: "Negro", categoria: "Zapatillas", precio: 170, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.b58Qk9IBIKD6hm_gUdHTsgHaGj?w=218&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Skechers", color: "Blanco", categoria: "Zapatillas", precio: 170, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.b58Qk9IBIKD6hm_gUdHTsgHaGj?w=218&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Skechers", color: "Azul", categoria: "Zapatillas", precio: 170, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.b58Qk9IBIKD6hm_gUdHTsgHaGj?w=218&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Skechers", color: "Gris", categoria: "Zapatillas", precio: 170, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.b58Qk9IBIKD6hm_gUdHTsgHaGj?w=218&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Zapatillas Converse", color: "Negro", categoria: "Zapatillas", precio: 109, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.y_KqdkZA_yObr_GGNwa6qAHaEo?w=297&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Converse", color: "Blanco", categoria: "Zapatillas", precio: 109, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.y_KqdkZA_yObr_GGNwa6qAHaEo?w=297&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Converse", color: "Gris", categoria: "Zapatillas", precio: 109, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.y_KqdkZA_yObr_GGNwa6qAHaEo?w=297&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Converse", color: "Azul", categoria: "Zapatillas", precio: 109, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.y_KqdkZA_yObr_GGNwa6qAHaEo?w=297&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Converse", color: "Verde", categoria: "Zapatillas", precio: 109, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.y_KqdkZA_yObr_GGNwa6qAHaEo?w=297&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Zapatillas Converse", color: "Rojo", categoria: "Zapatillas", precio: 109, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.y_KqdkZA_yObr_GGNwa6qAHaEo?w=297&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  // HOODIES
  { nombre: "Hoodie Clásica", color: "Negro", categoria: "Hoodies", precio: 89, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.25n3gJ3J9eHu8KyuCN-4YAHaN3?w=115&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie Clásica", color: "Blanco", categoria: "Hoodies", precio: 89, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.25n3gJ3J9eHu8KyuCN-4YAHaN3?w=115&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie Clásica", color: "Gris", categoria: "Hoodies", precio: 89, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.25n3gJ3J9eHu8KyuCN-4YAHaN3?w=115&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie Clásica", color: "Azul", categoria: "Hoodies", precio: 89, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.25n3gJ3J9eHu8KyuCN-4YAHaN3?w=115&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie Clásica", color: "Verde", categoria: "Hoodies", precio: 89, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.25n3gJ3J9eHu8KyuCN-4YAHaN3?w=115&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie Clásica", color: "Vino", categoria: "Hoodies", precio: 89, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.25n3gJ3J9eHu8KyuCN-4YAHaN3?w=115&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },

  { nombre: "Hoodie con cierre", color: "Negro", categoria: "Hoodies", precio: 99, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.RlNMGbRVf4XdcJvWigyjAwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Hoodie con cierre", color: "Blanco", categoria: "Hoodies", precio: 99, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.RlNMGbRVf4XdcJvWigyjAwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Hoodie con cierre", color: "Gris", categoria: "Hoodies", precio: 99, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.RlNMGbRVf4XdcJvWigyjAwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Hoodie con cierre", color: "Azul", categoria: "Hoodies", precio: 99, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.RlNMGbRVf4XdcJvWigyjAwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Hoodie con cierre", color: "Uva", categoria: "Hoodies", precio: 99, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.RlNMGbRVf4XdcJvWigyjAwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Hoodie con capucha", color: "Negro", categoria: "Hoodies", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th?id=OIF.K%2fCLegTng4rzFjgdTYNTBA&w=116&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie con capucha", color: "Blanco", categoria: "Hoodies", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th?id=OIF.K%2fCLegTng4rzFjgdTYNTBA&w=116&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie con capucha", color: "Gris", categoria: "Hoodies", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th?id=OIF.K%2fCLegTng4rzFjgdTYNTBA&w=116&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie con capucha", color: "Azul", categoria: "Hoodies", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th?id=OIF.K%2fCLegTng4rzFjgdTYNTBA&w=116&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie con capucha", color: "Vino", categoria: "Hoodies", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th?id=OIF.K%2fCLegTng4rzFjgdTYNTBA&w=116&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { nombre: "Hoodie con capucha", color: "Rojo", categoria: "Hoodies", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th?id=OIF.K%2fCLegTng4rzFjgdTYNTBA&w=116&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" },

  { nombre: "Hoodie estampado", color: "Verde", categoria: "Hoodies", precio: 100, estilo: "Urbano", img: "https://tse4.mm.bing.net/th/id/OIP.HL8csrW8UHFEIA_POF8qHQAAAA?r=0&pid=ImgDet&w=189&h=289&c=7&dpr=1,3&o=7&rm=3" },
  { nombre: "Hoodie estampado", color: "Blanco", categoria: "Hoodies", precio: 100, estilo: "Urbano", img: "https://tse4.mm.bing.net/th/id/OIP.HL8csrW8UHFEIA_POF8qHQAAAA?r=0&pid=ImgDet&w=189&h=289&c=7&dpr=1,3&o=7&rm=3" },
  { nombre: "Hoodie estampado", color: "Gris", categoria: "Hoodies", precio: 100, estilo: "Urbano", img: "https://tse4.mm.bing.net/th/id/OIP.HL8csrW8UHFEIA_POF8qHQAAAA?r=0&pid=ImgDet&w=189&h=289&c=7&dpr=1,3&o=7&rm=3" },
  { nombre: "Hoodie estampado", color: "Azul", categoria: "Hoodies", precio: 100, estilo: "Urbano", img: "https://tse4.mm.bing.net/th/id/OIP.HL8csrW8UHFEIA_POF8qHQAAAA?r=0&pid=ImgDet&w=189&h=289&c=7&dpr=1,3&o=7&rm=3" },
  { nombre: "Hoodie estampado", color: "Rojo", categoria: "Hoodies", precio: 100, estilo: "Urbano", img: "https://tse4.mm.bing.net/th/id/OIP.HL8csrW8UHFEIA_POF8qHQAAAA?r=0&pid=ImgDet&w=189&h=289&c=7&dpr=1,3&o=7&rm=3" },
  { nombre: "Hoodie estampado", color: "Naranja", categoria: "Hoodies", precio: 100, estilo: "Urbano", img: "https://tse4.mm.bing.net/th/id/OIP.HL8csrW8UHFEIA_POF8qHQAAAA?r=0&pid=ImgDet&w=189&h=289&c=7&dpr=1,3&o=7&rm=3" },

  // GORRAS
  { nombre: "Gorra Clásica", color: "Negro", categoria: "Gorras", precio: 20, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.f1CqYTQBWJFWBuj-LSHL8wHaJ4?w=144&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Clásica", color: "Blanco", categoria: "Gorras", precio: 20, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.f1CqYTQBWJFWBuj-LSHL8wHaJ4?w=144&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Clásica", color: "Azul", categoria: "Gorras", precio: 20, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.f1CqYTQBWJFWBuj-LSHL8wHaJ4?w=144&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Clásica", color: "Rojo", categoria: "Gorras", precio: 20, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.f1CqYTQBWJFWBuj-LSHL8wHaJ4?w=144&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Clásica", color: "Verde", categoria: "Gorras", precio: 20, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.f1CqYTQBWJFWBuj-LSHL8wHaJ4?w=144&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Clásica", color: "Naranja", categoria: "Gorras", precio: 20, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.f1CqYTQBWJFWBuj-LSHL8wHaJ4?w=144&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Gorra Deportiva", color: "Negro", categoria: "Gorras", precio: 60, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.lHOPUN0xBTEdwt7FOzn3qgHaFQ?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Deportiva", color: "Blanco", categoria: "Gorras", precio: 60, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.lHOPUN0xBTEdwt7FOzn3qgHaFQ?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Deportiva", color: "Azul", categoria: "Gorras", precio: 60, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.lHOPUN0xBTEdwt7FOzn3qgHaFQ?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Deportiva", color: "Rojo", categoria: "Gorras", precio: 60, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.lHOPUN0xBTEdwt7FOzn3qgHaFQ?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Deportiva", color: "Verde", categoria: "Gorras", precio: 60, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.lHOPUN0xBTEdwt7FOzn3qgHaFQ?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Deportiva", color: "Naranja", categoria: "Gorras", precio: 60, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.lHOPUN0xBTEdwt7FOzn3qgHaFQ?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Gorra Estampada", color: "Negro", categoria: "Gorras", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Hfb-yInfr2gBadcUuGhGfwHaGx?w=213&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Estampada", color: "Blanco", categoria: "Gorras", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Hfb-yInfr2gBadcUuGhGfwHaGx?w=213&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Estampada", color: "Azul", categoria: "Gorras", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Hfb-yInfr2gBadcUuGhGfwHaGx?w=213&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Estampada", color: "Rojo", categoria: "Gorras", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Hfb-yInfr2gBadcUuGhGfwHaGx?w=213&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Estampada", color: "Verde", categoria: "Gorras", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Hfb-yInfr2gBadcUuGhGfwHaGx?w=213&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorra Estampada", color: "Naranja", categoria: "Gorras", precio: 35, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.Hfb-yInfr2gBadcUuGhGfwHaGx?w=213&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Gorro Knit", color: "Negro", categoria: "Gorras", precio: 50, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.FPPsPotNu6spW_wdNhw4UAHaHa?w=215&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorro Knit", color: "Blanco", categoria: "Gorras", precio: 50, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.FPPsPotNu6spW_wdNhw4UAHaHa?w=215&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorro Knit", color: "Azul", categoria: "Gorras", precio: 50, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.FPPsPotNu6spW_wdNhw4UAHaHa?w=215&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorro Knit", color: "Rojo", categoria: "Gorras", precio: 50, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.FPPsPotNu6spW_wdNhw4UAHaHa?w=215&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorro Knit", color: "Verde", categoria: "Gorras", precio: 50, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.FPPsPotNu6spW_wdNhw4UAHaHa?w=215&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Gorro Knit", color: "Naranja", categoria: "Gorras", precio: 50, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.FPPsPotNu6spW_wdNhw4UAHaHa?w=215&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  // BUFANDAS
  { nombre: "Bufanda de lana", color: "Negro", categoria: "Bufandas", precio: 35, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.YrLcicqTuHiVMFqmgy7U3QHaJd?w=165&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda de lana", color: "Gris", categoria: "Bufandas", precio: 35, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.YrLcicqTuHiVMFqmgy7U3QHaJd?w=165&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda de lana", color: "Azul", categoria: "Bufandas", precio: 35, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.YrLcicqTuHiVMFqmgy7U3QHaJd?w=165&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda de lana", color: "Rojo", categoria: "Bufandas", precio: 35, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.YrLcicqTuHiVMFqmgy7U3QHaJd?w=165&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda de lana", color: "Verde", categoria: "Bufandas", precio: 35, estilo: "Clásico", img: "https://th.bing.com/th/id/OIP.YrLcicqTuHiVMFqmgy7U3QHaJd?w=165&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Bufanda tejida", color: "Negro", categoria: "Bufandas", precio: 45, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.GA4gVKvSiM4q6OIoxrMCpQHaFj?w=186&h=140&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda tejida", color: "Blanco", categoria: "Bufandas", precio: 45, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.GA4gVKvSiM4q6OIoxrMCpQHaFj?w=186&h=140&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda tejida", color: "Azul", categoria: "Bufandas", precio: 45, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.GA4gVKvSiM4q6OIoxrMCpQHaFj?w=186&h=140&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda tejida", color: "Naranja", categoria: "Bufandas", precio: 45, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.GA4gVKvSiM4q6OIoxrMCpQHaFj?w=186&h=140&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda tejida", color: "Rojo", categoria: "Bufandas", precio: 45, estilo: "Casual", img: "https://th.bing.com/th/id/OIP.GA4gVKvSiM4q6OIoxrMCpQHaFj?w=186&h=140&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Bufanda estampada", color: "Negro", categoria: "Bufandas", precio: 50, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.R5GphcurXA351DKJhvdiXwHaJK?w=170&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda estampada", color: "Verde", categoria: "Bufandas", precio: 50, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.R5GphcurXA351DKJhvdiXwHaJK?w=170&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda estampada", color: "Rojo", categoria: "Bufandas", precio: 50, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.R5GphcurXA351DKJhvdiXwHaJK?w=170&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda estampada", color: "Azul", categoria: "Bufandas", precio: 50, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.R5GphcurXA351DKJhvdiXwHaJK?w=170&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda estampada", color: "Amarillo", categoria: "Bufandas", precio: 50, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.R5GphcurXA351DKJhvdiXwHaJK?w=170&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Bufanda polar", color: "Negro", categoria: "Bufandas", precio: 40, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.btUPGUAn7aWMizBVCiym2gHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda polar", color: "Azul", categoria: "Bufandas", precio: 40, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.btUPGUAn7aWMizBVCiym2gHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda polar", color: "Rojo", categoria: "Bufandas", precio: 40, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.btUPGUAn7aWMizBVCiym2gHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda polar", color: "Gris", categoria: "Bufandas", precio: 40, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.btUPGUAn7aWMizBVCiym2gHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Bufanda polar", color: "Morado", categoria: "Bufandas", precio: 40, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.btUPGUAn7aWMizBVCiym2gHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  // CHALECOS
  { nombre: "Chaleco casual", color: "Negro", categoria: "Chalecos", precio: 79, estilo: "Casual", img: "https://i.pinimg.com/originals/9c/a1/46/9ca1467d411392839351e760e1efd3ec.jpg" },
  { nombre: "Chaleco casual", color: "Azul", categoria: "Chalecos", precio: 79, estilo: "Casual", img: "https://i.pinimg.com/originals/9c/a1/46/9ca1467d411392839351e760e1efd3ec.jpg" },
  { nombre: "Chaleco casual", color: "Beige", categoria: "Chalecos", precio: 79, estilo: "Casual", img: "https://i.pinimg.com/originals/9c/a1/46/9ca1467d411392839351e760e1efd3ec.jpg" },
  { nombre: "Chaleco casual", color: "Verde", categoria: "Chalecos", precio: 79, estilo: "Casual", img: "https://i.pinimg.com/originals/9c/a1/46/9ca1467d411392839351e760e1efd3ec.jpg" },
  { nombre: "Chaleco casual", color: "Blanco", categoria: "Chalecos", precio: 79, estilo: "Casual", img: "https://i.pinimg.com/originals/9c/a1/46/9ca1467d411392839351e760e1efd3ec.jpg" },

  { nombre: "Chaleco deportivo", color: "Negro", categoria: "Chalecos", precio: 89, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.Fr8GzXjymhuYyDhY4gaEswHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco deportivo", color: "Azul", categoria: "Chalecos", precio: 89, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.Fr8GzXjymhuYyDhY4gaEswHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco deportivo", color: "Rojo", categoria: "Chalecos", precio: 89, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.Fr8GzXjymhuYyDhY4gaEswHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco deportivo", color: "Gris", categoria: "Chalecos", precio: 89, estilo: "Deportivo", img: "https://th.bing.com/th/id/OIP.Fr8GzXjymhuYyDhY4gaEswHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Chaleco con capucha", color: "Negro", categoria: "Chalecos", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.X_sgccS1vBSEb9jlg85kowHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco con capucha", color: "Blanco", categoria: "Chalecos", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.X_sgccS1vBSEb9jlg85kowHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco con capucha", color: "Verde", categoria: "Chalecos", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.X_sgccS1vBSEb9jlg85kowHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco con capucha", color: "Azul", categoria: "Chalecos", precio: 95, estilo: "Urbano", img: "https://th.bing.com/th/id/OIP.X_sgccS1vBSEb9jlg85kowHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

  { nombre: "Chaleco acolchado", color: "Negro", categoria: "Chalecos", precio: 99, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.0GyjYpCSWxzWEWIJmyPrSwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco acolchado", color: "Azul", categoria: "Chalecos", precio: 99, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.0GyjYpCSWxzWEWIJmyPrSwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco acolchado", color: "Beige", categoria: "Chalecos", precio: 99, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.0GyjYpCSWxzWEWIJmyPrSwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { nombre: "Chaleco acolchado", color: "Marrón", categoria: "Chalecos", precio: 99, estilo: "Moderno", img: "https://th.bing.com/th/id/OIP.0GyjYpCSWxzWEWIJmyPrSwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
];

const renderProductos = () => {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  let filtros = obtenerFiltros();
  let texto = document.querySelector(".searchbar input").value.toLowerCase();

  productos.filter(p => {
    let coincide = true;
    for (let key in filtros) {
      if (!filtros[key].includes(p[key])) coincide = false;
    }
    return coincide && p.nombre.toLowerCase().includes(texto);
  }).forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${p.img}" alt="${p.nombre}" />
        <div class="details">
            <span class="estilo">${p.estilo}</span>
            <div class="name-price">
            <strong class="nombre">${p.nombre}</strong>
            <strong class="precio">S/.${p.precio}</strong>
            </div>
        </div>
        `;
    container.appendChild(card);
  });
}

const obtenerFiltros = () => {
  let checked = document.querySelectorAll("input[type='checkbox']:checked");
  let filtros = {};
  checked.forEach(c => {
    let tipo = c.dataset.filter;
    if (!filtros[tipo]) filtros[tipo] = [];
    filtros[tipo].push(c.value);
  });
  return filtros;
}

const filterProducts = () => {
  renderProductos();
}

document.querySelectorAll("input[type='checkbox']").forEach(input => {
  input.addEventListener("change", filterProducts);
});

const toggleSection = (el) => {
  const section = el.parentElement;
  section.classList.toggle("active");
}

renderProductos();