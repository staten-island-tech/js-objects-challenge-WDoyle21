const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age: function() {
        console.log(this);
        return 2020 - Riya.dob;
    }
}