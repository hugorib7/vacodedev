
const url_api = "https://api.hypixel.net/skyblock/auctions";
async function getapi(url) 
{
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if (response) 
    {
        hideloader();
    }
    show(data);
}
getapi(url_api);

function hideloader() 
{
    document.getElementById('loading').style.display = 'none';
}
function show(data) 
{
    const cb = document.querySelector('#BIN');
    let tab = 
        `<tr>
          <th>Nome do item</th>
          <th>Lore do item</th>
          <th>Tier do item</th>
          <th>Preço/aposta mais alta</th>
          <th>Apostador</th>
          <th>Data do fim</th>
         </tr>`;
    for (let a in data.auctions) 
    {
        var dt = new Date(data.auctions[a].end).toLocaleString(); 
        if (data.auctions[a].bin === false) {
        tab += `<tr> 
        <td>${data.auctions[a].item_name}</td>
        <td>${data.auctions[a].item_lore}</td>
        <td>${data.auctions[a].tier}</td> 
        <td>${data.auctions[a].highest_bid_amount} coins</td>
        <td>${data.auctions[a].bidder}</td>
        <td>${dt}</td>
        </tr>`;
        }
        if (data.auctions[a].bin === true) {
        tab += `<tr> 
        <td>${data.auctions[a].item_name}</td>
        <td>${data.auctions[a].item_lore}</td>
        <td>${data.auctions[a].tier}</td> 
        <td>${data.auctions[a].starting_bid} coins</td>
        <td>${data.auctions[a].bidder}</td>
        <td>${dt}</td>
        </tr>`;
        }
    }
    document.getElementById("leilao").innerHTML = tab;
}

function searchAuctions() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("pesquisa");
    filter = input.value.toUpperCase();
    table = document.getElementById("leilao");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}