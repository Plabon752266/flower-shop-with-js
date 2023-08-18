function handleClickBtn(e) {
    const selectedItemContainer = document.getElementById('selected-items');
    // console.log(e.parentNode.childNodes[1].innerText);
    const itemName = e.parentNode.childNodes[1].innerText;
    const list = document.createElement('li');
    list.innerText = itemName;
    // console.log(li);
    selectedItemContainer.appendChild(list)

    let value = parseFloat(e.parentNode.childNodes[5].innerText.split(' ')[1].replace('$',''))
    // console.log(value)
    // console.log(document.getElementById('priceOfFlower').innerHTML);
    const price = parseFloat(document.getElementById('priceOfFlower').innerHTML)
    let total = value + price
    let grandtotal = total- (total * 0.25)
    document.getElementById('priceOfFlower').innerHTML = total
    document.getElementById('Grand').innerText = grandtotal

    // console.log(price.innerText);
} 