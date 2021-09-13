async function getData() {
    const response = await fetch("API");
    const a = await response.json();
    return a;
}
getData();
