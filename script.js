//// Async/Await method :

async function getApi() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    console.log(data);
}
let result = getApi();



//// .then method :

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then(function (cryptoList) {
        let placeholder = document.querySelector("#output");
        let data = "";
        for (let list of cryptoList) {
            data += `
        <tr>
        <td> <img src = '${list.image}' height="35px" width = "35px" </td>
        &nbsp;&nbsp;
            <td>${list.name}</td>
           
            <td>${list.symbol}</td>
           
            <td>${list.id}</td>
          
            <td>${list.current_price}</td>
            <td>${list.total_volume}</td>

        </tr>
         `;
        }

        placeholder.innerHTML = data;
    })
    .catch((err) => {
        console.log(err);
    })










