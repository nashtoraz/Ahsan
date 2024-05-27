document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    var name = document.getElementById('name').value;
    alert('Hello ' + name);
});
