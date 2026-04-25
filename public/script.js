const catalogo= [
{id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 8.0,
    assistido: false},
{id: 2,
    titulo: "Vingadores: Ultimato",
    tipo: "filme",
    ano: 2019,
    generos: ["ação"],
    nota: 9.0,
    assistido: true},
{id: 3,
    titulo: "Friends",
    tipo: "serie",
    ano: 1994,
    generos: ["comédia"],
    nota: 9.0,
    assistido: true},
{id: 4,
    titulo: "Avatar",
    tipo: "filme",
    ano: 2009,
    generos: ["aventura", "fantasia"],
    nota: 7.8,
    assistido: false},
 {id: 5,
    titulo: "Cinderela",
    tipo: "filme",
    ano: 1950,
    generos: ["animação", "fantasia"],
    nota: 8.5,
    assistido: true
  },
 {id: 6,
    titulo: "Brooklyn Nine-Nine",
    tipo: "serie",
    ano: 2013,
    generos: ["comédia", "policial"],
    nota: 9.5,
    assistido: true
  },

]
console.log(catalogo)
console.log(catalogo[0].titulo)
console.log(catalogo[catalogo.length-1].ano)
if  (catalogo[2].generos.length > 1) { 
    console.log(catalogo[2].generos[1]);
} else {
    console.log("Esse item não possui genero");
}
catalogo.forEach(item=> {
   console.log(`[${item.tipo}] ${item.titulo} (${item.ano})`);
});
const titulosEmCaixaAlta=catalogo.map(item=> item.titulo.toUpperCase())
console.log(titulosEmCaixaAlta)
const naoAssistidos= catalogo.filter(item=> item.assistido===false);
console.log("Quantidade de não assistidos:" , naoAssistidos.length)
const destaque=catalogo.find(item=> item.nota >=9)
if(destaque)  { 
    console.log(destaque.titulo, destaque.nota)
} else {console.log("Não tem filmes destaque")

}
const Somanotas=catalogo.reduce((acc,item)=> acc + item.nota,0)
const media= Somanotas/ catalogo.length;
console.log(media.toFixed(2));
const assistidos = catalogo.filter(item => item.assistido);
const soma = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos= soma/assistidos.length
console.log(mediaAssistidos.toFixed(2))
const temAntigo = catalogo.some(item => item.ano < 2000);
console.log("Existe item antes de 2000?", temAntigo);
const todosTemGenero = catalogo.every(item => item.generos && item.generos.length > 0)
console.log("Todos têm gênero?", todosTemGenero);
const output = document.getElementById("output");
const total = catalogo.length;
const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;
const top3 = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);
  output.innerHTML = `
  <p><strong>Total de itens:</strong> ${total}</p>
  <p><strong>Filmes:</strong> ${filmes} | <strong>Séries:</strong> ${series}</p>
  <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
  <p><strong>Média geral:</strong> ${media.toFixed(2)}</p>

  <h3>Top 3 melhores</h3>
  <ul>
    ${top3.map(item => `<li>${item.titulo} (${item.nota})</li>`).join("")}
  </ul>
`;

