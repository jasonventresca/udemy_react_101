const myobj = {
    'name': 'jason',
    'cities': ['nyc', 'dc', 'lax'],
    'list_em'() {
        console.log(this.name + ' has lived in ' + this.cities.length + ' cities');
        this.cities.forEach((city) => {
            console.log('    ' + this.name + ' has lived in ' + city);
        });
    },
    'get_em'() {
        return this.cities.map((city) => '    ' + this.name + ' has lived in ' + city);
    }
};

myobj.list_em();
console.log(myobj.get_em());

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((x) => x * this.multiplyBy)
    }
};
console.log(multiplier.multiply());
