document.getElementById('batteryLevel').addEventListener('animationend', function() {
    document.getElementById('batteryLevel').style.display = 'none';
    document.getElementById('comingSoon').style.display = 'block';
});