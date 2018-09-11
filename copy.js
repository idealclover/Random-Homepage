function copy(){
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', "shadowspacex@163.com");
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("Copied to clipboard.");
}
