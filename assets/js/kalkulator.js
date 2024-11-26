function hitungFungsi() {
    let m = parseFloat(document.getElementById("m").value);
    let c = parseFloat(document.getElementById("c").value);
    let x = parseFloat(document.getElementById("x").value);
    let y = m * x + c;
    document.getElementById("result").textContent = y;
}
