function copyRefLink() {
    const refLink = document.getElementById("ref-link");
    refLink.select();
    document.execCommand("copy");
    alert("Ссылка скопирована!");
}