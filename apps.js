function toCelsius(f) {
    return (5/9) * (f - 32);
}
document.getElementById("temp").innerHTML = toCelsius(25);
